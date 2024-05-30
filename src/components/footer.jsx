import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterDiv className="flex flex-row items-center text-center justify-center">
<p className="flex gap-1 py-1">Built with love, by Ferinco <Icon icon="fluent-emoji-flat:red-heart" width="1.2em" height="1.2em" /></p>
        </FooterDiv>
    )
}
const FooterDiv = styled.div`
`