// const { join } = require('path');
// module.exports = [
//   {
//     mock: false,
//     namespace: 'PLATFORM',
//     requestLibPath: "import request from '@/utils/request';",
//     projectName: 'platform',
//     schemaPath: join(__dirname, './api/platform_iam.swagger.json'),
//   },
//   {
//     mock: false,
//     projectName: 'smzx',
//     namespace: 'SMZX',
//     requestLibPath: "import request from '@/utils/request';",
//     schemaPath: join(__dirname, './api/smzx.swagger.json'),
//   },
// ];

const url = 'https://apihub.dev.inrobot.cloud/swaggerui/';

module.exports = [
  {
    mock: false,
    namespace: 'PLATFORM',
    requestLibPath: "import request from '@/utils/request';",
    projectName: 'platform',
    schemaPath: `${url}config/platform_iam.swagger.json?id=${Math.random()}`,
  },
  {
    mock: false,
    namespace: 'SMZX',
    requestLibPath: "import request from '@/utils/request';",
    projectName: 'smzx',
    schemaPath: `${url}config/smzx.swagger.json?id=${Math.random()}`,
  },
  {
    mock: false,
    namespace: 'SPEECHOPEN',
    requestLibPath: "import request from '@/utils/request';",
    projectName: 'speechOpen',
    schemaPath: `${url}config/speech-open.swagger.json?id=${Math.random()}`,
  },
];
