import styled from "styled-components";
import { Button } from "../custom/button";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function LoginPage() {
    const marqueImages1 = [
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698717/Firdaus/IMG-20230901-WA0010_wpqd5y.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698100/Firdaus/Screenshot_20221226-182710_1_jrfr32.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698093/Firdaus/Screenshot_20220823-083706_1_we5dio.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698090/Firdaus/Screenshot_20220823-083631_1_pqmhtr.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698087/Firdaus/Screenshot_20220823-083433_2_poesu0.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698086/Firdaus/Screenshot_20220823-083433_1_cne8do.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213241_1_lxseka.jpg",
      ];
      const marqueImages2 = [
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698722/Firdaus/IMG-20230901-WA0012_zbvsdw.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698100/Firdaus/Screenshot_20221226-182710_1_jrfr32.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698724/Firdaus/IMG-20230901-WA0014_jur3yh.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698090/Firdaus/Screenshot_20220823-083631_1_pqmhtr.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698717/Firdaus/IMG-20230901-WA0009_1_h32p6p.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698086/Firdaus/Screenshot_20220823-083433_1_cne8do.jpg",
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698101/Firdaus/Screenshot_20221226-182739_1_za3qn6.jpg",
      ];
  return (
    <Container className="w-screen h-screen full lg:bg-gradient-to-r from-neutral-800 from-20% via-neutral-700 via-30% to-neutral-950 to-70%">
      <div className=" flex flex-row h-full w-full py-6 px-14 items-center">
        <div className="flex flex-col gap-4 form">
          <div className="texts flex flex-col items-start">
            <h3 className="text-2xl font-bold">Welcome back!</h3>
            <p className="">Enter your email and password to login</p>
          </div>
          <input
            className="input p-3 w-72 bg-transparent pl-0 focus:outline-none "
            placeholder="Email"
          />
          <input
            className="input p-3 w-72 bg-transparent pl-0 focus:outline-none"
            placeholder="Password"
          />
          <Button red small className="w-72 mt-5">
            Sign In
          </Button>
          <Link className="underline link">Forgot Password?</Link>
        </div>
 
      </div>
    </Container>
  );
}
const Container = styled.div`
  .input {
    border-bottom: 1px solid grey;
    color: grey;
    font-size: 14px;
  }
.link{
    color: red;
    font-size: 15px;
}

  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover ;
@media screen and (min-width: 900px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(/public/back2.jpg);
      background-size: cover;
      opacity: 0.1; 
      /* z-index: -1; */
    } 
 .form{
    z-index: 999 ;
 }
    
}
`;
