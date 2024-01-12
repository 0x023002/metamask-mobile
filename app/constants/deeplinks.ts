export enum ETH_ACTIONS {
  TRANSFER = 'transfer',
  APPROVE = 'approve',
}

export enum PROTOCOLS {
  HTTP = 'http',
  HTTPS = 'https',
  WC = 'wc',
  ETHEREUM = 'ethereum',
  DAPP = 'dapp',
  METAMASK = 'metamask',
}

export enum ACTIONS {
  DAPP = 'dapp',
  SEND = 'send',
  APPROVE = 'approve',
  PAYMENT = 'payment',
  FOCUS = 'focus',
  WC = 'wc',
  CONNECT = 'connect',
  ANDROID_SDK = 'bind',
  BUY_CRYPTO = 'buy-crypto',
  SELL_CRYPTO = 'sell-crypto',
  EMPTY = '',
}

export const PREFIXES = {
  [ACTIONS.DAPP]: 'https://',
  [ACTIONS.SEND]: 'ethereum:',
  [ACTIONS.APPROVE]: 'ethereum:',
  [ACTIONS.PAYMENT]: '',
  [ACTIONS.FOCUS]: '',
  [ACTIONS.WC]: '',
  [ACTIONS.CONNECT]: '',
  [ACTIONS.ANDROID_SDK]: '',
  [ACTIONS.BUY_CRYPTO]: '',
  [ACTIONS.EMPTY]: '',
  [ACTIONS.PAYMENT]: '',
  [ACTIONS.WC]: '',
  [ACTIONS.CONNECT]: '',
  [ACTIONS.ANDROID_SDK]: '',
  [ACTIONS.BUY_CRYPTO]: '',
  [ACTIONS.SELL_CRYPTO]: '',
  METAMASK: 'metamask://',
};
