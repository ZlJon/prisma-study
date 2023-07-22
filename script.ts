// npx prisma generate = prisma client를 사용하기 위한 코드를 생성, 이를 아래와 같이 입력하면 사용할 수 있다.
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query"] }); = 모든 쿼리를 로그아웃함.
const prisma = new PrismaClient();

async function main() {
  // 데이터 삭제하기 (findFirst와 문법이 비슷하다)
  // delete => 한 명의 사용자만 삭제, 고유한 필드 값
  const user = await prisma.user.deleteMany({
    where: {
      // email: "test@test2.com",
      age: {
        gt: 20, // gt => 20세 이상이기에 deleteMany를 사용해야 한다.
      },
    },
  });

  // 내가 만든 사용자 기본 설정이 이미 있는 경우에는 어떻게 하는가?
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "hong",
  //   },
  //   include: { userPreference: true },
  // });

  // 연결하기
  // const user = await prisma.user.update({
  //   where: {
  //     email: "test@test2.com",
  //   },
  //   data: {
  //     userPreference: {
  //       connect: {
  //         id: "262b380e-6b7c-4965-8f77-d43098edd02c",
  //       },
  //     },
  //   },
  // });

  // 연결 해제하기
  // const user = await prisma.user.update({
  //   where: {
  //     email: "test@test2.com",
  //   },
  //   data: {
  //     userPreference: {
  //       disconnect: true,
  //     },
  //   },
  // });
  // ----------------------------------------------
  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,

  //   },
  // });
  // console.log(preference);

  // const user = await prisma.user.update({
  //   where: {
  //     email: "test@test2.com",
  //   },
  //   data: {
  //     userPreference: { //새 사용자 기본 설정을 만들고 싶다고 지정할 수 있고 이메일 업데이트가 사실이라고 말할 수 있다. 그러면 내 사용자가 이 정보로 새로운 사용자 기본 설정을 제공하도록 업데이트될 것이다.
  //       create: {
  //         emailUpdates: true
  //       }
  //     }
  //     // age: {
  //       // increment: 1, //업데이트마다 나이가 +1 됨. 유니크 키만 사용 가능
  //       // decrement: 2, //업데이트마다 -2 차감됨.
  //       // multiply: 2, //곱하기 2
  //     //   divide: 2, //나누기 2
  //     // },
  //   },
  // });

  // const user = await prisma.user.updateMany({
  //   where: {
  //     //hong@test4.com라는 이메일 데이터를
  //     // email: "hong@test4.com",
  //     name: "king",
  //   },
  //   data: {
  //     // email: "hong@test5.com", //hong@test5.com라는 이메일 데이터로 수정
  //     name: "new King",
  //   },
  // });

  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "new King",
  //   },
  // });

  // const user = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       // is => "" 특정 저자입니까? isNot => is의 반대 개념
  //       is: {
  //         age: 27,
  //       },
  //     },
  //   },
  // });

  // const user = await prisma.user.findMany({
  // where: {
  // name: { equals: "hong" }, //"hong"과 일치하는 이름만 조건으로 출력함.
  // name: { not: "hong" }, //"hong"과 일치하지 않는 이름만 조건으로 출력함.
  // name: { in: ["hong", "king"] }, //배열 안에 해다되는 이름을 조건으로 출력함. not in = in의 반대 개념
  // name: { notIn: ["hong", "king"] },
  // name: "hong",
  // age: { lt: 20 }, // 나이가 20미만인 조건으로 데이터를 찾음.
  // age: { gt: 20 }, //나이가 20보다 큰 데이터를 찾음.
  // email: { contains: "@test1.com" }, // 문자열로 조건 검색하기
  // email: { endsWith: "@test1.com" }, //@test1.com로 끝나는 문자열을 조건으로 찾기
  // email: { startsWith: "hong" }, //hong로 시작하는 문자열로 찾기
  // name: "king",
  // AND: [{ email: { startsWith: "hong" } }, { name: "hong" }], //이메일에 hong와 이름에 hong이 포함되는 데이터를 조건으로 출력함. NOT은 반대 개념
  // writtenPosts: {
  // none => 해당 사용자가 Test라는 제목이 있는 게시물을 작성하지 않았습니까?
  // some => 제목이 Test로 시작하는 것이 있습니까?
  // some: {
  // title: { startsWith: "Test" }, // Test라는 제목으로 시작하는 게시물이 있습니까?
  //     },
  //   },
  // },

  // orderBy: {
  //   age: "desc", //나이 기준으로 오름차순(asc) 내림차순은(desc)
  // },
  // distinct: ["name", "age"], //구별하기 name 하나만 입력하면 첫번째 내용만 가져옴, 나이와 함께 사용하면 모두 출력됨.
  // take: 2, //페이징 처리하는 코드 => 2개 데이터를 보여줌
  // skip: 1, //첫 번째 hong를 제외하고 나머지 hong를 출력함.
  // });

  // data 생성
  // const user = await prisma.user.create({ data: { name: "hong" } });
  // console.log(user);
  // await prisma.user.createMany({
  //   data: [    // 다수의 데이터 생성
  //     {
  //       name: "hong",
  //       age: 13,
  //       email: "hong@test4.com",
  //     },
  //   ],
  // });
  // data 모두 찾기
  // const user = await prisma.user.findMany();
  // console.log(user);
  // data 모두 삭제
  // const user = await prisma.user.deleteMany();
  // console.log(user);
  // await prisma.user.deleteMany();
  // await prisma.user.createMany(); => 다수의 데이터를 생성함.
  // await prisma.user.findUnique => @id @unique로 지정된 값을 찾을 수 있음.

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: "hong",
  //   },
  // });

  // const user = await prisma.user.findUnique({
  //   where: {       //  @@unique([age, name]) 을 설정한 것을 사용하는 코드/나이와 이름을 기준으로 해당 데이터를 찾음.
  //     age_name: {
  //       age: 24,
  //       name: "king",
  //     },
  //   },
  // });

  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "king",
  //       email: "test1@test1.com",
  //       age: 27,
  //     },
  //     {
  //       name: "hong",
  //       email: "test@test2.com",
  //       age: 35,
  //     },
  //   ],
  //   // include: {
  //   //   userPreference: true,
  //   // },
  //   // select: { //sql의 선택자
  //   //   name: true,
  //   //   userPreference: { select: { id: true } },
  //   // },
  // });

  console.log(user);
  //   console.log(user.length); => 얼마나 많은 유저가 있는지 확인 (count 개념)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
