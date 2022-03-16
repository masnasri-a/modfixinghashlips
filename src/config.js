const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "GGX",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "9UV1xhH6jvP68TLVhJbbWsMJN3YDKXDUth3Acn5W9jz3",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 3,
    layersOrder: [
      {name: "GEN1_1_BG"},
      {name: "GEN1_2_Shadow"},
      {name: "GEN1_3_Tail"},
      {name: "GEN1_4_BArm"},
      {name: "GEN1_5_BShoulder"},
      {name: "GEN1_6_Body"},
      {name: "GEN1_7_Armor"},
      {name: "GEN1_8_Head"},
      {name: "GEN1_9_Mouth"},
      {name: "GEN1_10_Eye"},
      {name: "GEN1_11_Headgear"},
      {name: "GEN1_12_FArm"},
      {name: "GEN1_13_FShoulder"},
      {name: "GEN1_14_Weapon"}, 
    ],
  },
  {
    growEditionSizeTo: 6,
    layersOrder: [
      {name: "GEN2_1_BG"},
      {name: "GEN2_2_Shadow"},
      {name: "GEN2_3_Tail"},
      {name: "GEN2_4_BArm"},
      {name: "GEN2_5_BShoulder"},
      {name: "GEN2_6_Body"},
      {name: "GEN2_7_Armor"},
      {name: "GEN2_8_Head"},
      {name: "GEN2_9_Mouth"},
      {name: "GEN2_10_Eye"},
      {name: "GEN2_11_Headgear"},
      {name: "GEN2_12_FArm"},
      {name: "GEN2_13_FShoulder"},
      {name: "GEN2_14_Weapon"},
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {"collection": {"name": "TestGGX", "family": "TestGGX"},};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
