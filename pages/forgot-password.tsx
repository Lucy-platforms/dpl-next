import Container from "@ui/Container";
import Page from "@ui/Page";
import Head from "next/head";
import React from "react";

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <Page>
      <Head>
        <title>Forgot password?</title>
      </Head>
      <Container></Container>
    </Page>
  );
};

export default ResetPassword;