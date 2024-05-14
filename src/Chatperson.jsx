import React, { useState } from "react";

const Chatperson = ({ userdetailsinfile, setOpen }) => {
  const [inputMessage, setinputMessage] = useState("");
  const [inputMessagearray, setinputMessagearray] = useState([]);
  const savingarray = () => {
    if (inputMessage == "") {
      alert("Enter your message");
    } else {
      setinputMessagearray([
        ...inputMessagearray,
        { id: inputMessagearray.length, Name: inputMessage },
      ]);
    }
    setinputMessage("");
    console.log(inputMessage);
  };
  const deletemessage = (del) => {
    let removechat = inputMessagearray.filter((x) => x.id !== del.id);
    setinputMessagearray(removechat);
  };

  return (
    <div>
      <section className="desktop">
        <div className="chat py-2">
          <div className="backImage">
            <div className="ChatNavbar d-flex justify-content-between">
              <div className="backbtn ps-2" onClick={() => setOpen(false)}>
                <button
                  className="btn rounded-circle my-2"
                  type="submit"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height=""
                    fill="currentColor"
                    class="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </button>
                <div className="row">
                  {userdetailsinfile.map((dd) => (
                    <div className="col-lg-12">
                      <div className="profileAndName my-2 pe-2">
                        <div className="profileImage">
                          <img src={dd.userprofile} />
                        </div>
                        <div className="personName py-2 pe-3">
                          {dd.username}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="Calls d-flex gap-2 rounded-pill mx-3 px-2">
                <div className="subdivChatnavbarIcon1 pt-1">
                  <span className="text-light fs-5 ps-3 ">Call <b className="ps-2"> | </b></span>
                </div>
                <div className="subdivChatnavbarIcon2 text-light btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera-video-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
                    />
                  </svg>
                </div>
                <div className="subdivChatnavbarIcon3 text-light btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
            <div className="messageDisplayarea text-light">
                    {inputMessagearray.map((msg, index) => (
                      <div
                        key={index}
                        className="textLine "
                      >
                        <div className="personText text-start">
                          <span className="text-danger">ME</span>
                          <h6 className="text-light fs-6">
                            {" "}
                            <span className="text-danger fw-bold">|</span>{" "}
                            {msg.Name}
                          </h6>
                        </div>
                        <button
                          className="text-light px-3 mt-3"
                          onClick={() => deletemessage(msg)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="currentColor"
                            class="bi bi-trash3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
              <div className="chatBar d-flex justify-content-between mx-3 align-items-end pb-4 px-2">
                <div className="cameraIcon text-light ms-3 p-1 btn btn-outline-dark pb-2 rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-camera2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
                    <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" />
                  </svg>
                </div>
                <div className="chatdisplayarea">

                  <div className="inputBox ps-3 d-flex">

                    <input
                      type="text"
                      className=" text-start ps-3 btn btn-outline-dark rounded-pill"
                      placeholder="Send a chat"
                      value={inputMessage}
                      onChange={(event) => setinputMessage(event.target.value)}
                    />
                    <button
                      type="submit"
                      className=" sendBtn btn btn-outline-dark text-light rounded-circle p-1 py-1 ms-2"
                      onClick={() => savingarray()}
                    >
                      <svg
                        className="pb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-send"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="emojiAndgallaryIcon d-flex mx-auto px-2">
                  <div className="emojiIcon text-light  ms-3 p-2 btn btn-outline-dark py-1 rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-emoji-wink"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.757-.437a.5.5 0 0 1 .68.194.93.93 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.93 1.93 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68" />
                    </svg>
                  </div>
                  <div className="gallaryicon text-light  ms-3 p-2 btn btn-outline-dark pt-1 rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile">
        <div className="chat py-2 col">
          <div className="backImage">
          <div className="ChatNavbar d-flex justify-content-between">
              <div className="backbtn" onClick={() => setOpen(false)}>
                <button
                  className="btn rounded-circle my-2"
                  type="submit"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height=""
                    fill="currentColor"
                    class="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </button>
                <div className="row">
                  {userdetailsinfile.map((dd) => (
                    <div className="col-lg-12">
                      <div className="profileAndName my-2 pe-2">
                        <div className="profileImage">
                          <img src={dd.userprofile} />
                        </div>
                        <div className="personName py-2 pe-3">
                          {dd.username}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="Calls d-flex gap-1 rounded-pill mx-3 px-2">
                <div className="subdivChatnavbarIcon2 text-light btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera-video-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
                    />
                  </svg>
                </div>
                <div className="subdivChatnavbarIcon3 text-light btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
            <div className="messageDisplayarea text-light">
                    {inputMessagearray.map((msg, index) => (
                      <div
                        key={index}
                        className="textLine d-flex justify-content-start"
                      >
                        <div className="personText text-start">
                          <span className="text-danger">ME</span>
                          <h6 className="text-light fs-6">
                            {" "}
                            <span className="text-danger fw-bold">|</span>{" "}
                            {msg.Name}
                          </h6>
                        </div>
                        <button
                          className="text-light px-3 mt-3"
                          onClick={() => deletemessage(msg)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="currentColor"
                            class="bi bi-trash3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
              <div className="chatBar">
                <div className="cameraIcon text-light btn btn-outline-dark  rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-camera2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
                    <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" />
                  </svg>
                </div>
                <div>
                  <div className="inputBox  d-flex">
                    <input
                      type="text"
                      className=" text-start ps-3 btn btn-outline-dark rounded-pill"
                      placeholder="Send a chat"
                      value={inputMessage}
                      onChange={(event) => setinputMessage(event.target.value)}
                    />
                    <button
                      type="submit"
                      className=" sendBtn btn btn-outline-dark text-light rounded-circle ms-3"
                      onClick={() => savingarray()}
                    >
                      <svg
                        className="pb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-send"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="emojiAndgallaryIcon d-flex">
                  <div className="emojiIcon text-light   btn btn-outline-dark  rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-emoji-wink"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.757-.437a.5.5 0 0 1 .68.194.93.93 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.93 1.93 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68" />
                    </svg>
                  </div>
                  <div className="gallaryicon text-light  btn btn-outline-dark  rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Chatperson;
