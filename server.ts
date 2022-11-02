import { graphql, buildSchema } from 'graphql';

// Query 型でスキーマを定義
// 文字列を返す hello という API を定義している
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// クエリを処理するリゾルバを定義
const rootValue = {
  hello: () => {
    return 'Hello world!';
  },
};

const main = async () => {
  const query = '{ hello }';

  // クエリを実行
  const response = await graphql({
    schema,
    source: query,
    rootValue,
  });

  console.log(response);
};

main();