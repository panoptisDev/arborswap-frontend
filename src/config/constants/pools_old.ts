import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 214,
    stakingToken: tokens.cake,
    earningToken: tokens.naos,
    contractAddress: {
      97: '',
      56: '0xb38b78529bCc895dA16CE2978D6cD6C56e8CfFC3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1736',
  },
  {
    sousId: 213,
    stakingToken: tokens.cake,
    earningToken: tokens.pha,
    contractAddress: {
      97: '',
      56: '0x2E101b5F7f910F2609e5AcE5f43bD274b1DE09AA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.28',
  },
  {
    sousId: 212,
    stakingToken: tokens.cake,
    earningToken: tokens.bel,
    contractAddress: {
      97: '',
      56: '0x52733Ad7b4D09BF613b0389045e33E2F287afa04',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.101',
  },
  {
    sousId: 211,
    stakingToken: tokens.cake,
    earningToken: tokens.ramp,
    contractAddress: {
      97: '',
      56: '0x401b9b97bdbc3197c1adfab9652dc78040bd1e13',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.9837',
  },
  {
    sousId: 210,
    stakingToken: tokens.cake,
    earningToken: tokens.pots,
    contractAddress: {
      97: '',
      56: '0xBeDb490970204cb3CC7B0fea94463BeD67d5364D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0868',
  },
  {
    sousId: 209,
    stakingToken: tokens.cake,
    earningToken: tokens.tusd,
    contractAddress: {
      97: '',
      56: '0xb6e510ae2da1ab4e350f837c70823ab75091780e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.5787',
  },
  {
    sousId: 208,
    stakingToken: tokens.cake,
    earningToken: tokens.revv,
    contractAddress: {
      97: '',
      56: '0x8aa5b2c67852ed5334c8a7f0b5eb0ef975106793',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.331',
  },
  {
    sousId: 207,
    stakingToken: tokens.cake,
    earningToken: tokens.btt,
    contractAddress: {
      97: '',
      56: '0x3b804460c3c62f0f565af593984159f13b1ac976',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '263',
  },
  {
    sousId: 206,
    stakingToken: tokens.cake,
    earningToken: tokens.skill,
    contractAddress: {
      97: '',
      56: '0x455f4d4cc4d6ca15441a93c631e82aaf338ad843',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00289',
  },
  {
    sousId: 205,
    stakingToken: tokens.cake,
    earningToken: tokens.win,
    contractAddress: {
      97: '',
      56: '0xde4aef42bb27a2cb45c746acde4e4d8ab711d27c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1815.39',
  },
  {
    sousId: 204,
    stakingToken: tokens.cake,
    earningToken: tokens.if,
    contractAddress: {
      97: '',
      56: '0x57d3524888ded4085d9124a422f13b27c8a43de7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.02835',
  },
  {
    sousId: 203,
    stakingToken: tokens.cake,
    earningToken: tokens.sps,
    contractAddress: {
      97: '',
      56: '0xb56299d8fbf46c509014b103a164ad1fc65ea222',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '12.86',
  },
  {
    sousId: 202,
    stakingToken: tokens.cake,
    earningToken: tokens.c98,
    contractAddress: {
      97: '',
      56: '0x5e49531BA07bE577323e55666D46C6217164119E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 201,
    stakingToken: tokens.cake,
    earningToken: tokens.axs,
    contractAddress: {
      97: '',
      56: '0xBB472601B3CB32723d0755094BA80B73F67f2AF3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00744',
  },
  {
    sousId: 200,
    stakingToken: tokens.axs,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x583A36816F3b8401C4fdf682203E0caDA6997740',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00992',
  },
  {
    sousId: 199,
    stakingToken: tokens.cake,
    earningToken: tokens.pmon,
    contractAddress: {
      97: '',
      56: '0x28050e8f024e05f9ddbef5f60dd49f536dba0cf0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.02696',
  },
  {
    sousId: 198,
    stakingToken: tokens.cake,
    earningToken: tokens.trx,
    contractAddress: {
      97: '',
      56: '0xb2b62f88ab82ed0bb4ab4da60d9dc9acf9e816e5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '9.6643',
  },
  {
    sousId: 197,
    stakingToken: tokens.cake,
    earningToken: tokens.chess,
    contractAddress: {
      97: '',
      56: '0xd1812e7e28c39e78727592de030fc0e7c366d61a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4286',
  },
  {
    sousId: 196,
    stakingToken: tokens.cake,
    earningToken: tokens.titan,
    contractAddress: {
      97: '',
      56: '0x97058cf9b36c9ef1622485cef22e72d6fea32a36',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.08912',
  },
  {
    sousId: 195,
    stakingToken: tokens.cake,
    earningToken: tokens.harmony,
    contractAddress: {
      97: '',
      56: '0xe595456846155e23b24cc9cbee910ee97027db6d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.0092',
  },
  {
    sousId: 194,
    stakingToken: tokens.cake,
    earningToken: tokens.mask,
    contractAddress: {
      97: '',
      56: '0xae611c6d4d3ca2cee44cd34eb7aac29d5a387fcf',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.06423',
  },
  {
    sousId: 193,
    stakingToken: tokens.cake,
    earningToken: tokens.dvi,
    contractAddress: {
      97: '',
      56: '0x135827eaf9746573c0b013f18ee12f138b9b0384',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.7233',
  },
  {
    sousId: 192,
    stakingToken: tokens.cake,
    earningToken: tokens.gum,
    contractAddress: {
      97: '',
      56: '0x09b8a5f51c9e245402057851ada274174fa00e2a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.67129',
  },
  {
    sousId: 191,
    stakingToken: tokens.cake,
    earningToken: tokens.adx,
    contractAddress: {
      97: '',
      56: '0x53a2d1db049b5271c6b6db020dba0e8a7c4eb90d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.7523',
  },
  {
    sousId: 190,
    stakingToken: tokens.cake,
    earningToken: tokens.suter,
    contractAddress: {
      97: '',
      56: '0x4da8da81647ee0aa7350e9959f3e4771eb753da0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '69.9074',
  },
  {
    sousId: 189,
    stakingToken: tokens.cake,
    earningToken: tokens.bscpad,
    contractAddress: {
      97: '',
      56: '0x0446b8f8474c590d2249a4acdd6eedbc2e004bca',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3877',
  },
  {
    sousId: 188,
    stakingToken: tokens.cake,
    earningToken: tokens.rabbit,
    contractAddress: {
      97: '',
      56: '0x391240A007Bfd8A59bA74978D691219a76c64c5C',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.993',
  },
  {
    sousId: 187,
    stakingToken: tokens.cake,
    earningToken: tokens.waultx,
    contractAddress: {
      97: '',
      56: '0x017DEa5C58c2Bcf57FA73945073dF7AD4052a71C',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '7.9108',
  },
  {
    sousId: 186,
    stakingToken: tokens.cake,
    earningToken: tokens.wex,
    contractAddress: {
      97: '',
      56: '0x6Bd94783caCef3fb7eAa9284f1631c464479829f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '11.574',
  },
  {
    sousId: 185,
    stakingToken: tokens.cake,
    earningToken: tokens.form,
    contractAddress: {
      97: '',
      56: '0x7c71723fB1F9Cfb250B702cfc4eBd5D9Ab2E83d9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.4467',
  },
  {
    sousId: 184,
    stakingToken: tokens.cake,
    earningToken: tokens.orbs,
    contractAddress: {
      97: '',
      56: '0x9C8813d7D0A61d30610a7A5FdEF9109e196a3D77',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.8946',
  },
  {
    sousId: 183,
    stakingToken: tokens.cake,
    earningToken: tokens.$dg,
    contractAddress: {
      97: '',
      56: '0xa07a91da6d10173f33c294803684bceede325957',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00135',
  },
  {
    sousId: 182,
    stakingToken: tokens.cake,
    earningToken: tokens.woo,
    contractAddress: {
      97: '',
      56: '0x88c321d444c88acf3e747dc90f20421b97648903',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3854',
  },
  {
    sousId: 181,
    stakingToken: tokens.cake,
    earningToken: tokens.woo,
    contractAddress: {
      97: '',
      56: '0x3c7234c496d76133b48bd6a342e7aea4f8d87fc8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0003854',
  },
  {
    sousId: 180,
    stakingToken: tokens.cake,
    earningToken: tokens.htb,
    contractAddress: {
      97: '',
      56: '0x64473c33c360f315cab38674f1633505d1d8dcb2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '5.2083',
  },
  {
    sousId: 179,
    stakingToken: tokens.cake,
    earningToken: tokens.jgn,
    contractAddress: {
      97: '',
      56: '0x5cc7a19a50be2a6b2540ebcd55bd728e732e59c3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1001',
  },
  {
    sousId: 178,
    stakingToken: tokens.cake,
    earningToken: tokens.dft,
    contractAddress: {
      97: '',
      56: '0x2666e2494e742301ffc8026e476acc1710a775ed',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 177,
    stakingToken: tokens.cake,
    earningToken: tokens.hai,
    contractAddress: {
      97: '',
      56: '0x6ac2213F09A404c86AFf506Aa51B6a5BF1F6e24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.3078',
  },
  {
    sousId: 176,
    stakingToken: tokens.cake,
    earningToken: tokens.o3,
    contractAddress: {
      97: '',
      56: '0x35BD47263f7E57368Df76339903C53bAa99076e1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.107638',
  },
  {
    sousId: 175,
    stakingToken: tokens.cake,
    earningToken: tokens.ampl,
    contractAddress: {
      97: '',
      56: '0x62dEc3A560D2e8A84D30752bA454f97b26757877',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.398',
  },
  {
    sousId: 174,
    stakingToken: tokens.cake,
    earningToken: tokens.oddz,
    contractAddress: {
      97: '',
      56: '0x44d1f81e80e43e935d66d65874354ef91e5e49f6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4843',
  },
  {
    sousId: 173,
    stakingToken: tokens.cake,
    earningToken: tokens.bondly,
    contractAddress: {
      97: '',
      56: '0x4ea43fce546975aae120c9eeceb172500be4a02b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.6741',
  },
  {
    sousId: 172,
    stakingToken: tokens.cake,
    earningToken: tokens.marsh,
    contractAddress: {
      97: '',
      56: '0x567fd708e788e51b68666b9310ee9df163d60fae',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1108',
  },
  {
    sousId: 171,
    stakingToken: tokens.cake,
    earningToken: tokens.mbox,
    contractAddress: {
      97: '',
      56: '0x36f9452083fc9bc469a31e7966b873f402292433',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4803',
  },
  {
    sousId: 170,
    stakingToken: tokens.cake,
    earningToken: tokens.ata,
    contractAddress: {
      97: '',
      56: '0xc612680457751d0d01b5d901ad08132a3b001900',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 169,
    stakingToken: tokens.cake,
    earningToken: tokens.mx,
    contractAddress: {
      97: '',
      56: '0x336bcd59f2b6eb7221a99f7a50fd03c6bf9a306b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.27777',
  },
  {
    sousId: 168,
    stakingToken: tokens.cake,
    earningToken: tokens.bcfx,
    contractAddress: {
      97: '',
      56: '0x2b3974dda76b2d408b7d680a27fbb0393e3cf0e1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.6944',
  },
  {
    sousId: 167,
    stakingToken: tokens.cake,
    earningToken: tokens.qkc,
    contractAddress: {
      97: '',
      56: '0xfa67f97eeee6de55d179ecabbfe701f27d9a1ed9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '15.9143',
  },
  {
    sousId: 166,
    stakingToken: tokens.cake,
    earningToken: tokens.ktn,
    contractAddress: {
      97: '',
      56: '0x48852322a185dc5fc733ff8c8d7c6dcbd2b3b2a2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01215',
  },
  {
    sousId: 165,
    stakingToken: tokens.cake,
    earningToken: tokens.mtrg,
    contractAddress: {
      97: '',
      56: '0xf4d0f71698f58f221911515781b05e808a8635cb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.05613',
  },
  {
    sousId: 164,
    stakingToken: tokens.cake,
    earningToken: tokens.tusd,
    contractAddress: {
      97: '',
      56: '0x9dceb1d92f7e0361d0766f3d98482424df857654',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.5787',
  },
  {
    sousId: 163,
    stakingToken: tokens.cake,
    earningToken: tokens.vrt,
    contractAddress: {
      97: '',
      56: '0xb77f1425ec3a7c78b1a1e892f72332c8b5e8ffcb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '40.5092',
  },
  {
    sousId: 162,
    stakingToken: tokens.cake,
    earningToken: tokens.kalm,
    contractAddress: {
      97: '',
      56: '0xb9ff4da0954b300542e722097671ead8cf337c17',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0868',
  },
  {
    sousId: 161,
    stakingToken: tokens.cake,
    earningToken: tokens.ez,
    contractAddress: {
      97: '',
      56: '0xb19395702460261e51edf7a7b130109c64f13af9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01736',
  },
  {
    sousId: 160,
    stakingToken: tokens.cake,
    earningToken: tokens.kalm,
    contractAddress: {
      97: '',
      56: '0x6e113ecb9ff2d271140f124c2cc5b5e4b5700c9f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    isFinished: true,
    tokenPerBlock: '0.00868',
  },
  {
    sousId: 159,
    stakingToken: tokens.cake,
    earningToken: tokens.popen,
    contractAddress: {
      97: '',
      56: '0x7baf1763ce5d0da8c9d85927f08a8be9c481ce50',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.19097',
  },
  {
    sousId: 158,
    stakingToken: tokens.cake,
    earningToken: tokens.lien,
    contractAddress: {
      97: '',
      56: '0x2b8d6c9c62bfc1bed84724165d3000e61d332cab',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.023148',
  },
  {
    sousId: 157,
    stakingToken: tokens.cake,
    earningToken: tokens.well,
    contractAddress: {
      97: '',
      56: '0x8a06ff2748edcba3fb4e44a6bfda4e46769e557b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2025',
    sortOrder: 999,
  },
  {
    sousId: 156,
    stakingToken: tokens.cake,
    earningToken: tokens.deri,
    contractAddress: {
      97: '',
      56: '0x3eba95f5493349bbe0cad33eaae05dc6a7e26b90',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.6087',
    sortOrder: 999,
  },
  {
    sousId: 155,
    stakingToken: tokens.cake,
    earningToken: tokens.chr,
    contractAddress: {
      97: '',
      56: '0x593edbd14a5b7eec828336accca9c16cc12f04be',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.655',
    sortOrder: 999,
  },
  {
    sousId: 154,
    stakingToken: tokens.cake,
    earningToken: tokens.cyc,
    contractAddress: {
      97: '',
      56: '0xD714738837944C3c592477249E8edB724A76e068',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00015914',
    sortOrder: 999,
  },
  {
    sousId: 153,
    stakingToken: tokens.cake,
    earningToken: tokens.xend,
    contractAddress: {
      97: '',
      56: '0x8ea9f2482b2f7b12744a831f81f8d08714adc093',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.31828',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 152,
    stakingToken: tokens.cake,
    earningToken: tokens.hget,
    contractAddress: {
      97: '',
      56: '0x8e8125f871eb5ba9d55361365f5391ab437f9acc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03553',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 151,
    stakingToken: tokens.cake,
    earningToken: tokens.hotcross,
    contractAddress: {
      97: '',
      56: '0x0e09205e993f78cd5b3a5df355ae98ee7d0b5834',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
    isFinished: false,
  },
  {
    sousId: 150,
    stakingToken: tokens.cake,
    earningToken: tokens.rfox,
    contractAddress: {
      97: '',
      56: '0xf9f00d41b1f4b3c531ff750a9b986c1a530f33d9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.7361',
    isFinished: false,
  },
  {
    sousId: 149,
    stakingToken: tokens.cake,
    earningToken: tokens.wmass,
    contractAddress: {
      97: '',
      56: '0x4Af531EcD50167a9402Ce921ee6436dd4cFC04FD',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.24942',
    isFinished: false,
  },
  {
    sousId: 148,
    stakingToken: tokens.cake,
    earningToken: tokens.ubxt,
    contractAddress: {
      97: '',
      56: '0x9b4bac2d8f69853aa29cb45478c77fc54532ac22',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '2.4074',
    isFinished: false,
  },
  {
    sousId: 147,
    stakingToken: tokens.cake,
    earningToken: tokens.btr,
    contractAddress: {
      97: '',
      56: '0x20ee70a07ae1b475cb150dec27930d97915726ea',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '2.8935',
    isFinished: false,
  },
  {
    sousId: 146,
    stakingToken: tokens.cake,
    earningToken: tokens.τdoge,
    contractAddress: {
      97: '',
      56: '0x017556dffb8c6a52fd7f4788adf6fb339309c81b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.868',
    isFinished: false,
  },
  {
    sousId: 145,
    stakingToken: tokens.cake,
    earningToken: tokens.pmon,
    contractAddress: {
      97: '',
      56: '0xdaa711ecf2ac0bff5c82fceeae96d0008791cc49',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01261',
    isFinished: false,
  },
  {
    sousId: 144,
    stakingToken: tokens.cake,
    earningToken: tokens.one,
    contractAddress: {
      97: '',
      56: '0x74af842ecd0b6588add455a47aa21ed9ba794108',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '57.87',
    isFinished: false,
  },
  {
    sousId: 143,
    stakingToken: tokens.cake,
    earningToken: tokens.fine,
    contractAddress: {
      97: '',
      56: '0x42d41749d6e9a1c5b47e27f690d4531f181b2159',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1342',
    isFinished: false,
  },
  {
    sousId: 142,
    stakingToken: tokens.doge,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
  {
    sousId: 141,
    stakingToken: tokens.cake,
    earningToken: tokens.bmxx,
    contractAddress: {
      97: '',
      56: '0x55131f330c886e3f0cae389cedb23766ac9aa3ed',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01331',
    isFinished: false,
  },
  {
    sousId: 140,
    stakingToken: tokens.cake,
    earningToken: tokens.oin,
    contractAddress: {
      97: '',
      56: '0x01453a74a94687fa3f99b80762435855a13664f4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3472',
    isFinished: false,
  },
  {
    sousId: 139,
    stakingToken: tokens.cake,
    earningToken: tokens.hyfi,
    contractAddress: {
      97: '',
      56: '0x0032ceb978fe5fc8a5d5d6f5adfc005e76397e29',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '2.8935',
    isFinished: false,
  },
  {
    sousId: 138,
    stakingToken: tokens.cake,
    earningToken: tokens.kun,
    contractAddress: {
      97: '',
      56: '0x439b46d467402cebc1a2fa05038b5b696b1f4417',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.23148',
    isFinished: false,
  },
  {
    sousId: 137,
    stakingToken: tokens.cake,
    earningToken: tokens.math,
    contractAddress: {
      97: '',
      56: '0x377ae5f933aa4cfa41fa03e2cae8a2befccf53b2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.15798',
    isFinished: false,
  },
  {
    sousId: 136,
    stakingToken: tokens.cake,
    earningToken: tokens.ust,
    contractAddress: {
      97: '',
      56: '0xce3ebac3f549ebf1a174a6ac3b390c179422b5f6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.17361',
    isFinished: false,
  },
  {
    sousId: 135,
    stakingToken: tokens.cake,
    earningToken: tokens.win,
    contractAddress: {
      97: '',
      56: '0xd26dec254c699935c286cd90e9841dcabf1af72d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '462.96',
    isFinished: false,
  },
  {
    sousId: 134,
    stakingToken: tokens.cake,
    earningToken: tokens.trx,
    contractAddress: {
      97: '',
      56: '0x93e2867d9b74341c2d19101b7fbb81d6063cca4d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '4.0509',
    isFinished: false,
  },
  {
    sousId: 133,
    stakingToken: tokens.cake,
    earningToken: tokens.btt,
    contractAddress: {
      97: '',
      56: '0x3b644e44033cff70bd6b771904225f3dd69dfb6d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '79.86',
    isFinished: false,
  },
  {
    sousId: 132,
    stakingToken: tokens.cake,
    earningToken: tokens.lmt,
    contractAddress: {
      97: '',
      56: '0x0a687d7b951348d681f7ed5eea84c0ba7b9566dc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.66145',
    isFinished: false,
  },
  {
    sousId: 131,
    stakingToken: tokens.cake,
    earningToken: tokens.pnt,
    contractAddress: {
      97: '',
      56: '0x417df1c0e6a498eb1f2247f99032a01d4fafe922',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.09548',
    isFinished: false,
  },
  {
    sousId: 130,
    stakingToken: tokens.cake,
    earningToken: tokens.xmark,
    contractAddress: {
      97: '',
      56: '0xdc8943d806f9dd64312d155284abf780455fd345',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0298',
    isFinished: false,
  },
  {
    sousId: 129,
    stakingToken: tokens.cake,
    earningToken: tokens.ramp,
    contractAddress: {
      97: '',
      56: '0xa90a894e5bc20ab2be46c7e033a38f8b8eaa771a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4861',
    isFinished: true,
  },
  {
    sousId: 128,
    stakingToken: tokens.cake,
    earningToken: tokens.hakka,
    contractAddress: {
      97: '',
      56: '0x34ac807e34e534fe426da1e11f816422774aae1c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
    isFinished: false,
  },
  {
    sousId: 127,
    stakingToken: tokens.cake,
    earningToken: tokens.pbtc,
    contractAddress: {
      97: '',
      56: '0x31fa2f516b77c4273168b284ac6d9def5aa6dafb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0000031',
    isFinished: false,
  },
  {
    sousId: 126,
    stakingToken: tokens.cake,
    earningToken: tokens.lien,
    contractAddress: {
      97: '',
      56: '0x7112f8988f075c7784666ab071927ae4109a8076',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.003472',
    isFinished: false,
  },
  {
    sousId: 125,
    stakingToken: tokens.cake,
    earningToken: tokens.bbadger,
    contractAddress: {
      97: '',
      56: '0x126dfbcef85c5bf335f8be99ca4006037f417892',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00265278',
    isFinished: false,
  },
  {
    sousId: 124,
    stakingToken: tokens.cake,
    earningToken: tokens.bdigg,
    contractAddress: {
      97: '',
      56: '0x4f0ad2332b1f9983e8f63cbee617523bb7de5031',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00000403',
    isFinished: false,
  },
  {
    sousId: 123,
    stakingToken: tokens.cake,
    earningToken: tokens.bondly,
    contractAddress: {
      97: '',
      56: '0x9483ca44324de06802576866b9d296f7614f45ac',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4629',
    isFinished: false,
  },
  {
    sousId: 122,
    stakingToken: tokens.cake,
    earningToken: tokens.xed,
    contractAddress: {
      97: '',
      56: '0x72ceec6e2a142678e703ab0710de78bc819f4ce0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3472',
    isFinished: false,
  },
  {
    sousId: 121,
    stakingToken: tokens.cake,
    earningToken: tokens.cgg,
    contractAddress: {
      97: '',
      56: '0x1c6ed21d3313822ae73ed0d94811ffbbe543f341',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.10918',
    isFinished: false,
  },
  {
    sousId: 120,
    stakingToken: tokens.cake,
    earningToken: tokens.perl,
    contractAddress: {
      97: '',
      56: '0x1ac0d0333640f57327c83053c581340ebc829e30',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.1574',
    isFinished: false,
  },
  {
    sousId: 119,
    stakingToken: tokens.cake,
    earningToken: tokens.arpa,
    contractAddress: {
      97: '',
      56: '0xc707e5589aeb1dc117b0bb5a3622362f1812d4fc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.949',
    isFinished: false,
  },
  {
    sousId: 118,
    stakingToken: tokens.cake,
    earningToken: tokens.oddz,
    contractAddress: {
      97: '',
      56: '0x22106cdcf9787969e1672d8e6a9c03a889cda9c5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.11284',
    isFinished: false,
  },
  {
    sousId: 117,
    stakingToken: tokens.cake,
    earningToken: tokens.dexe,
    contractAddress: {
      97: '',
      56: '0x999b86e8bba3d4f05afb8155963999db70afa97f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.009837',
    isFinished: true,
  },
  {
    sousId: 116,
    stakingToken: tokens.cake,
    earningToken: tokens.dfd,
    contractAddress: {
      97: '',
      56: '0xAF3EfE5fCEeBc603Eada6A2b0172be11f7405102',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.46296',
    isFinished: false,
  },
  {
    sousId: 115,
    stakingToken: tokens.cake,
    earningToken: tokens.alpaca,
    contractAddress: {
      97: '',
      56: '0xf73fdeb26a8c7a4abf3809d3db11a06ba5c13d0e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.22743',
    isFinished: false,
  },
  {
    sousId: 114,
    stakingToken: tokens.cake,
    earningToken: tokens.τbtc,
    contractAddress: {
      97: '',
      56: '0xaac7171afc93f4b75e1268d208040b152ac65e32',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00000608',
    isFinished: false,
  },
  {
    sousId: 113,
    stakingToken: tokens.cake,
    earningToken: tokens.τbtc,
    contractAddress: {
      97: '',
      56: '0x2c6017269b4324d016ca5d8e3267368652c18905',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.00000608',
    isFinished: true,
  },
  {
    sousId: 112,
    stakingToken: tokens.cake,
    earningToken: tokens.swingby,
    contractAddress: {
      97: '',
      56: '0x675434c68f2672c983e36cf10ed13a4014720b79',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.21527',
  },
  {
    sousId: 111,
    stakingToken: tokens.cake,
    earningToken: tokens.xed,
    contractAddress: {
      97: '',
      56: '0x05d6c2d1d687eacfb5e6440d5a3511e91f2201a8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3472',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 110,
    stakingToken: tokens.cake,
    earningToken: tokens.hakka,
    contractAddress: {
      97: '',
      56: '0xd623a32da4a632ce01766c317d07cb2cad56949b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 109,
    stakingToken: tokens.cake,
    earningToken: tokens.cgg,
    contractAddress: {
      97: '',
      56: '0xdf75f38dbc98f9f26377414e567abcb8d57cca33',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.10918',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 108,
    stakingToken: tokens.cake,
    earningToken: tokens.mix,
    contractAddress: {
      97: '',
      56: '0xce64a930884b2c68cd93fc1c7c7cdc221d427692',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3721',
  },
  {
    sousId: 11,
    stakingToken: tokens.cake,
    earningToken: tokens.nar,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
    },
    poolCategory: PoolCategory.COMMUNITY,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 10,
    stakingToken: tokens.cake,
    earningToken: tokens.nya,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
    },
    poolCategory: PoolCategory.COMMUNITY,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '10',
    isFinished: true,
  },
  {
    sousId: 9,
    stakingToken: tokens.cake,
    earningToken: tokens.ctk,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 8,
    stakingToken: tokens.cake,
    earningToken: tokens.twt,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
