interface LoginProps{
  email: string;
  password: string;
}

export default{
  login({ email, password }: LoginProps){
    const user = UserRepository.getUser(email);

    if(user){

    }
  }
}
