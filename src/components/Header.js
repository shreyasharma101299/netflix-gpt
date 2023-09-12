import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-56 " src={LOGO} alt="netflix-logo" />
      <div className="flex align-middle">
        <select
          className="px-4 py-1 mr-3 bg-black text-white h-2/5 align-middle mt-9 rounded-lg items-center"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option
              className="p-2"
              key={lang.identifier}
              value={lang.identifier}
            >
              {t(`${lang.name}`)}
            </option>
          ))}
        </select>
        {user && (
          <div className="p-5 mt-5 w-fit flex items-center">
            <button
              onClick={handleGPTSearchClick}
              className="bg-white text-black font-bold px-4 py-2 mx-4 -mt-5 rounded-xl"
            >
              {showGptSearch ? t("homepage") : t("gptSearch")}
            </button>
            <div>
              <img className="w-10" src={PHOTO} alt="user-logo" />
              <p
                className="cursor-pointer text-white"
                onClick={() => handleSignOut()}
              >
                {t("signOut")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
