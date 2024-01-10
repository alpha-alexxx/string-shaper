import { Html, Button } from "@react-email/components";

const Email = ({ data }) => {
  return (
    <Html lang="en" dir="ltr">
      <p>{JSON.stringify(data)}</p>
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Html>
  )
}

export default Email