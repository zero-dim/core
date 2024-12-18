import { join } from 'node:path'
import { argv, cwd } from 'node:process'

import { checkbox, select } from '@inquirer/prompts'
import { findWorkspacePackages } from '@pnpm/workspace.find-packages'
import { execa } from 'execa'
import minimist from 'minimist'

const args = minimist(argv.slice(2))
const formatArgs = args.formats
const prod = args.prod || args.p
const pkg = args.pkg
const PACKAGES_DIR_NAME = 'packages'
const SCRIPTS_DIR_NAME = 'scripts'
const CONFIG_DIR_NAME = 'config'
const COMPILE_TYPE = {
  ALL: 'all',
  CHECKBOX: 'checkbox',
}
const packagesPkg = await findWorkspacePackages(join(cwd(), PACKAGES_DIR_NAME))
const scriptsPkg = await findWorkspacePackages(join(cwd(), SCRIPTS_DIR_NAME))
const configPkg = await findWorkspacePackages(join(cwd(), CONFIG_DIR_NAME))
const pkgList = [...packagesPkg, ...scriptsPkg, ...configPkg]

async function compilePkg(pkgs) {
  await Promise.all(pkgs.map((pkg) => {
    return (async function () {
      const manifest = pkgList.filter(item => item.manifest.name === pkg)[0].manifest
      if (manifest?.scripts?.build) {
        await execa('pnpm', ['--filter', manifest.name, 'build'], {
          stdio: 'inherit',
          env: {
            PROD: prod,
            FORMATS: formatArgs || (!prod ? 'es' : undefined),
            VERSION: manifest.version,
          },
        })
      }

      if (manifest?.scripts?.['build:dts']) {
        await execa('pnpm', ['--filter', manifest.name, 'build:dts'], {
          stdio: 'inherit',
          env: {
            PROD: prod,
          },
        })
      }
    })()
  }))
}

async function run() {
  const choices = []
  pkgList.forEach((item) => {
    choices.push({
      name: item?.manifest?.name,
      value: item?.manifest?.name,
      description: item?.manifest?.description,
    })
  })

  const compile = await select({
    message: '请选择编译类型',
    choices: [
      {
        name: '编译所有包',
        value: COMPILE_TYPE.ALL,
        description: '编译所有包',
      },
      {
        name: '编译多个包',
        value: COMPILE_TYPE.CHECKBOX,
        description: '编译多个包',
      },
    ],
  })

  let compilePkgList = []

  switch (compile) {
    case COMPILE_TYPE.ALL:
      compilePkgList = choices.map(item => item.name)
      break
    case COMPILE_TYPE.CHECKBOX:
      compilePkgList = await checkbox({
        message: '请选择你要编译的包',
        choices,
      })
      break
  }

  await compilePkg(compilePkgList)
}

if (pkg !== true && pkg)
  await compilePkg([pkg])
else
  await run()
