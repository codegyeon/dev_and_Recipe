import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import React, { FormEvent, useCallback, useEffect } from "react";
import {
  UserResponse,
  UserState,
  AUTH_USER,
  LOGIN_USER,
} from "../../redux/reducers/userSlice";
import { getAuthToken, userLogin } from "../../api/user";
import { FaGoogle } from "react-icons/fa6";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import {
  Button,
  Container,
  Form,
  GlobalStyle,
  Input,
  LoginButton,
  LoginContainer,
  SocialContainer,
} from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { AxiosError } from "axios";
import { RootState } from "../../type/local";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate: login_Mutate, isSuccess } = useMutation(userLogin, {
    onSuccess: (data: UserResponse) => {
      queryClient.invalidateQueries("user");
      dispatch(LOGIN_USER(data));
    },
    onError: (error: AxiosError) => {
      setComfirmMessage(String(error?.response?.data));
    },
  });
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirMessage, , setComfirmMessage] = useInput("");
  const [login, , setLogin] = useInput(false);
  const { user }: { user: UserState["user"] } = useSelector(
    (state: RootState) => state.user
  );
  const {
    isError: tokenError,
    data: userData,
    isSuccess: tokenSuccess,
  } = useQuery("user", getAuthToken);

  const checkLogin = useCallback(() => {
    const pattern = /^[^@]+@[^@]+$/;
    if (pattern.test(email) && password.length >= 1) setLogin(true);
    else setLogin(false);
  }, [email, password, setLogin]);

  useEffect(() => {
    if (tokenSuccess) {
      dispatch(AUTH_USER(userData as unknown as UserResponse));
    } else if (tokenError || user.token === undefined) {
      navigate("/Login");
    }
  }, [user, tokenSuccess, tokenError, navigate, dispatch, userData]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    setComfirmMessage("");
    checkLogin();
  }, [email, password, setComfirmMessage, checkLogin]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!login) return;
    const user = { email, password };
    login_Mutate(user);
  };

  const goSignUp = () => {
    navigate("/SignUp");
  };

  const forgotPassword = useCallback(() => {
    alert("잘 떠올려보셈 ㅡㅡ");
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Container>
        <div>
          <LoginContainer>
            <LoginButton onClick={goSignUp}>Sign Up</LoginButton>
          </LoginContainer>
          <Form onSubmit={handleSubmit}>
            <h1>#Dev && Recipe</h1>
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
            <span>or use your account</span>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
            <a href="#" onClick={forgotPassword}>
              Forgot your password?
            </a>
            <h4>{confirMessage}</h4>
            <Button signup={login}>Sign In</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
