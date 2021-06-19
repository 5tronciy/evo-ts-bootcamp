export const merge = (a: any[], b: any[], p: string) =>
  a.filter((aa) => !b.find((bb) => aa[p] === bb[p])).concat(b);
