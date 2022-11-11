import React from "react";
import img from "../../src/assets/Octocat.png";

export const Github = () => {
  return (
    <div>
      <div className="w-90% container m-5 rounded-lg bg-slate-300">
        <div className="flex justify-center">
          <input
            className="w-1/4 m-5 h-8 rounded-md bg-zinc-100"
            type="text"
            placeholder="Usuario Github"
          />
        </div>

        <div className="flex flex-row">
          <img className="ml-6" src={img} width={300} height={160} />

          <div className="ml-10">
            <div className="flex justify-start pb-2">
              <h1 className="font-sans font-bold text-4xl ">Octocat</h1>
            </div>
            <div className="flex justify-start pb-2">
              <p className="font-mono italic text-lg">@octocat</p>
            </div>
            <div>
              <p className="text-lg">
                Lorem ipsu dolor sit amet. Ea excepturi doloribus ea praesentium
                nihil nam dolore laboriasam ad fugit nobis
              </p>
            </div>
            <div className="flex flex-row  place-content-around bg-slate-200 p-2 rounded-xl">
              <div>
                <p className="text-xl">Repositorios</p>
                <p className="text-xl">8</p>
              </div>
              <div>
                <p className="text-xl">Seguidores</p>
                <p className="text-xl">7486</p>
              </div>
              <div>
                <p className="text-xl">Me gusta</p>
                <p className="text-xl">9</p>
              </div>
            </div>
            <div className="flex flex-row place-content-around p-4">
              <div>
                <div className="flex flex-row">
                  <ion-icon name="location-outline" size="large" />
                  <p>Posadas, Misiones</p>
                </div>
                <div className="flex flex-row">
                  <ion-icon name="globe-outline" size="large"></ion-icon>
                  <p>@octocat_</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row">
                  <ion-icon name="logo-twitter" size="large"></ion-icon>
                  <p>https://github.blog/octocat</p>
                </div>
                <div className="flex flex-row">
                  <ion-icon name="logo-linkedin" size="large"></ion-icon>
                  <p>@octocat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
