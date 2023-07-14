import useInput from "../../hooks/useInput";
import { addUser } from "../../api/user";
import {
  Button,
  Container,
  Form,
  GlobalStyle,
  Input,
  SignUpButton,
  SignUpContainer,
  SocialContainer,
} from "./style";
import React, { FormEvent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";

const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickName, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirmPassword, onChangeConfirmPassword] = useInput("");
  const [confirMessage, , setComfirmMessage] = useInput("");
  const [signUp, , setSignUp] = useInput(false);
  const queryClient = useQueryClient();
  const { mutate: addUser_mutate, isSuccess } = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
    onError: (error: AxiosError) => {
      setComfirmMessage(String(error?.response?.data));
    },
  });
  const navigate = useNavigate();

  const checkLogin = useCallback(() => {
    const pattern = /^[^@]+@[^@]+$/;
    if (
      pattern.test(typeof email === "string" ? email : "") &&
      password.length >= 1 &&
      confirmPassword.length >= 1 &&
      nickName.length >= 1
    )
      setSignUp(true);
    else setSignUp(false);
  }, [email, password, confirmPassword, nickName, setSignUp]);

  const goLogin = () => {
    navigate("/Login");
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    setComfirmMessage("");
    checkLogin();
  }, [
    email,
    nickName,
    password,
    confirmPassword,
    setComfirmMessage,
    checkLogin,
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signUp) return;
    if (password !== confirmPassword) {
      setComfirmMessage("비밀번호와 확인비밀번호가 일치하지 않습니다.");
      return;
    }
    const newUser = {
      email,
      password,
      nickName,
    };
    addUser_mutate(newUser);
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <SignUpContainer>
          <SignUpButton onClick={goLogin}>Login</SignUpButton>
        </SignUpContainer>
        <Form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div>
            <SocialContainer>
              <a
                href={`${import.meta.env.VITE_APP_LOCAL_SERVER}/user/naver`}
                className="social"
              >
                <SiNaver size={"2em"} />
              </a>
              <a
                href={`${import.meta.env.VITE_APP_LOCAL_SERVER}/user/google`}
                className="social"
              >
                <FaGoogle size={"2em"} />
              </a>
              <a
                href={`${import.meta.env.VITE_APP_LOCAL_SERVER}/user/kakao`}
                className="social"
              >
                <RiKakaoTalkFill size={"2em"} color={"black"} />
              </a>
            </SocialContainer>
          </div>
          <span>or use your email for registration</span>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            type="nickName"
            placeholder="NickName"
            value={nickName}
            onChange={onChangeNickname}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <Input
            type="confirmpassword"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
          <h3>{confirMessage}</h3>
          <Button signup={signUp}>Sign Up</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignUp;
