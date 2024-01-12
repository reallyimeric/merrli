export async function rootLoader() {
  return null;
}

export async function cardLoader(options: { params: { cardPwd?: string } }) {
  const { params } = options;
  const { cardPwd } = params;
  return { card: { pwd: cardPwd, name: "梅洛", description: "堆3！" } } as {
    card: Card;
  };
}

export type Card = {
  pwd: string;
  name: string;
  description: string;
};
