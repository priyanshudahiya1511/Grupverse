import React, { useState, useEffect } from 'react';
import './cssFolder/ThirdComponentstyle.css';
import './imgFolder/image.jpg'

function ThirdGridComponent() {
  const [teamData, setTeamData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchTeamData();
    fetchUserData();
  }, []);

  function fetchTeamData() {
    let from = 0;
    let to = 20;
    fetch(`https://grupverse.com/statistics/getteambyranks?from=${from}&to=${to}`)
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data);
        from += 20;
        to += 20;
      })
      .catch((err) => console.log(err));
  }

  function fetchUserData() {
    let from = 0;
    let to = 20;
    fetch(`https://grupverse.com/statistics/getuserbyranks?from=${from}&to=${to}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        from += 20;
        to += 20;
      })
      .catch((err) => console.log(err));
  }

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      fetchTeamData();
      fetchUserData();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid">
      <h4 className="top-team1">Top Teams of the week</h4>
      <div className="container1">
        {teamData.map((values) => (
          <div className="card1" key={values.id}>
            <div className="Wrapper">
              <div className="img1">
                <a href=" "><img className="square-image" src={`https://grupverse.com/${values.profilepic}`} alt="square image"/></a>
              </div>
              <div className="text1">
                <a href=" " style={{textDecoration:'none'}}><p className="team-name">{values.name}</p></a>
              </div>
              <div className="joinbtn">
                <a href=" " className="button" style={{textDecoration:'none'}}>Follow</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="top-team2">Top Global Users of the week</h4>
      <div className="container2">
        {userData.map((valuess) => (
          <div className="card2" key={valuess.id}>
            <div className="round">
              <div className="img2">
                <a href=" "><img className="round-imagee" src={`https://grupverse.com/${valuess.profilepic}`} alt="round image"/></a>
              </div>
              <div className="text2">
                <a href=" " style={{textDecoration:'none'}}><p className="username">{valuess.username}</p></a>
              </div>
              <div className="followbtn">
                <a href=" " className="button" style={{textDecoration:'none'}}>Follow</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdGridComponent;
