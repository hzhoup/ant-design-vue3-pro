import { viteMockServe } from 'vite-plugin-mock'

export const setupMock = (isBuild: boolean) => {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    watchFiles: true,
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../../mock/_createProductionServer';
      setupProdMockServer();
      `
  })
}
