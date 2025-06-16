import { Button, Container, Icon, Layout, Text } from "@/components";
import Navigation from "components/Navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Charisman Apriandi - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        css={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          top: 15,
          zIndex: 9999,
        }}
        initial={{ opacity: 0, y: "6rem" }}
        animate={{ opacity: 1, y: "0rem" }}
        transition={{ delay: 0.3 }}
      >
        <Navigation />
      </motion.div>
      <Layout.Primary isPaddingTop>
        <Container.Default css={{ paddingTop: 100 }}>
          <Text
            as="h1"
            css={{
              fontSize: "clamp(24px, 8vw, 36px)",
              fontWeight: 900,
              marginBottom: 14,
              textAlign: "center",
            }}
          >
            <span
              css={({ palette: { text, background } }) => ({
                background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              Full-Stack Web & Mobile Developer
            </span>
            {/* <br /> */}
            {/* <span
              css={({ palette: { text, background } }) => ({
                background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              Transforming Ideas into Scalable, User-Friendly Digital Products
            </span> */}
          </Text>
          <Text css={{ lineHeight: "22px", textAlign: "center" }}>
            Transforming Ideas into Scalable, User-Friendly Digital Products
          </Text>
          <section
            css={{
              marginTop: "80px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Text
              as="h2"
              css={({ palette: { text, background } }) => ({
                background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "24px",
              })}
            >
              About Me
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              Hi, I&apos;m <b>Charisman Apriandi</b>, a full-stack developer with over {new Date().getFullYear() - 2020} {" "}
              years of experience building web and mobile applications. I specialize in developing robust, scalable 
              solutions—covering both frontend and backend development.
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              I have a strong foundation in front-end technologies such as HTML, CSS, and JavaScript, and I&apos;m proficient 
              in modern frameworks like React and Vue.js. On the backend, I work with Node.js, Python, and have experience 
              building RESTful and GraphQL APIs, as well as working with relational and NoSQL databases like PostgreSQL and MongoDB.
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              My approach combines technical precision with a deep understanding of user experience, allowing me to build solutions 
              that are not only functional but also intuitive and user-friendly. I’m highly motivated, adaptable, and always open 
              to learning new technologies and tackling new challenges.
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              I thrive in collaborative environments, but I’m also confident taking ownership of tasks and delivering high-quality 
              results independently.
            </Text>
          </section>
          <section css={{ marginTop: "80px", marginBottom: "80px" }}>
            <div
              css={({ palette, borderRadius }) => ({
                background: palette.background.secondary,
                padding: 20,
                borderRadius: borderRadius,
                border: `1px solid ${palette.text.disabled}`,
              })}
            >
              <Text css={{ lineHeight: "28px" }}>
                If you&apos;re looking for a dependable full-stack developer who can handle both frontend and backend with 
                confidence, I&apos;d love to connect. With a solid foundation in building end-to-end solutions, I&apos;m ready to 
                support your project from architecture to deployment.
              </Text>
              <Text css={{ lineHeight: "28px", marginTop: 16 }}>
                Feel free to reach out to me at{" "}
                <span
                  css={({ palette }) => ({ color: palette.text.highlight })}
                >
                  <Link href="mailto:charismanapriandi@gmail.com">
                    charismanapriandi@gmail.com
                  </Link>{" "}
                </span>
                or{" "} 
                <span
                  css={({ palette }) => ({ color: palette.text.highlight })}
                >
                  <Link href="tel:+6287886775740">+62 878 86775740</Link>{" "}
                </span>{" "}
                to discuss how I can contribute to your team or project.
              </Text>
              <div css={{ marginTop: "20px" }}>
                {/* <Link css={{width: 'fit-content'}} href='https://drive.google.com/file/d/1qnyWVCA7qJN9MdJuCjwvGznlNcXutwLZ/view?usp=sharing' passHref> */}
                <a
                  href="/resume.pdf"
                  css={{ width: "fit-content" }}
                  target="_blank"
                  rel="noreferrer"
                  download="Resume - Charisman Apriandi - May 2024"
                >
                  <Button>
                    <Icon.Download
                      css={{ marginRight: "20px", color: "#FFFFFF" }}
                      size={24}
                    />{" "}
                    Curriculum Vitae
                  </Button>
                </a>
                {/* </Link> */}
              </div>
            </div>
          </section>
        </Container.Default>
      </Layout.Primary>
    </>
  );
}
