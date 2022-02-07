import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import './Home.css';

class Home extends React.Component{
  state = {
    //영화앱 데이터 로딩 상태 표시
    isLoading: true,
    movie: [],
  };

  //axios.get이 반환하는 영화 데이터를 불러오는데 시간이 걸리기때문에(비동기함수) 실행이 분리될수 있도록 새 함수 생성
  getMovies = async() =>{
    //axios.get을 통해 API호출, 반환한 결과(데이터)를 movies에 저장
    //경로 확인하고 구조분해할당으로 movies 데이터 키에 접근하기
    //?sort_by=rating => 평점 내림차순으로 데이터 정렬
    const{
      data:{
        data:{movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //{movies(state):movies(구조분해할당으로 얻은 영화 데이터를 가진 변수)}
    //객체의 키와 대입할 변수의 이름이 같은 경우 코드 축약 가능
    this.setState({movies, isLoading:false})
    
  }

  //render함수가 실행될때 영화 데이터 로딩 현상 구현
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // },6000); //isLoading state를 6초 후에 false로 바꾸기

    //영화 데이터 로딩 완료
    this.getMovies();
  }

  render(){
    //삼항연산자로 로딩 상태에 따라 문장 출력하기
    const {isLoading, movies} = this.state;
    return(
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        )
        : (
          <div className='movies'>
            {
              movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    runtime={movie.runtime}
                    rating={movie.rating}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })
            }
          </div>
        )}
      </section>
    );
  };
};

export default Home;