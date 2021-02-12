### css [styled components]
have benefits
- could be scoped easy
- use js values inside a css (parts of state ...)

instead apply style to i.e. H2, or another poligraphycation
create <H2 Component>  with a style already attach to it
and that will scope all styles to that component[tag]
`const Logo = styled.h2`

- to apply - replace h2 to <HomeLogo>
- will be still rendered as h2 , but got a support class
const HomeLogo = styled.h2`
  background: red;
`;
