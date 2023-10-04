import Certificates from "./Certficates";

const CertificateData = [
  {
    id: 1,
    title: "FullStack",
    imgurl: "/fullstackopen.png",
    by: "University of Michigan",
    tags: "MongoDB · API Development · Express.js · Back-End Web Development · Cypress · react router · Redux · Front-End Development · React.js · Mongoose ODM · Application Programming Interfaces (API) · Node.js · Unit Testing · Postman API · End-to-end Testing · Redux Thunk",
    credential:
      "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/265e35e6805a30d9bee38674b7cedbc1",
  },

  {
    id: 2,
    title: "GraphQl",
    imgurl: "/graphql.png",
    tags: "Back-End Web Development · Apollo GraphQL · GraphQL",
    credential:
      "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/5b20e93981c25a3ce34a8965dd6561f6",
    by: "University of Michigan",
  },

  {
    id: 3,
    title: "React js",
    imgurl: "/reacjs.png",
    tags: "Front-End Development · React.js · Application Programming Interfaces (API) ",
    credential:
      "https://codedamn.com/certificate/verify/53212c8e70d3496da15f6c9670f6f734493d0554",
    by: "Codedamn",
  },
];

export default function CertificatesData() {
  return (
    <div>
      <Certificates CertificateData={CertificateData} />
    </div>
  );
}
