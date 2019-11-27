interface IGetLocaleKey {
  type: 'LOCALE'
}

type TGetKeyMapper =
  | IGetLocaleKey

const getKey = (params: TGetKeyMapper) => {
  switch (params.type) {
    case 'LOCALE':
      return params.type
  }
}

export const ls = {
  getKey
}
