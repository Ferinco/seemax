import styled from "styled-components";

export default function LoginPage(){
    return(
        <Container className="w-screen h-screen">
            <div className=" flex flex-row h-full w-full py-6 px-14 items-center">
<div className="flex flex-col gap-4">
<div className="texts flex flex-col items-start">
    <h3 className="text-2xl font-bold">Welcome back!</h3>
    <p className="text-xl">Enter your email and password to login</p>
</div>
<input className="input p-3 w-72" placeholder="Email"/>
<input className="input p-3 w-72" placeholder="Password"/>

</div>

            </div>
        </Container>
    )
}
const Container = styled.div`
border: 1px solid white;
`