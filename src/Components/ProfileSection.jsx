import React from "react";

function ProfileSection() {
  return (
    <>
      <div className="col-span-2 rounded-xl mr-5 bg-slate-50 shadow-2xl h-72 grid grid-rows-3">
        <div
          className="flex justify-center items-center row-span-2 py-5 rounded-t-2xl bg-cover"
          style={{
            backgroundImage:
              'url("https://www.uninorte.edu.co/documents/13983580/0/universidad-del-norte-banner+%287%29+%281%29.jpg/593674b2-8fa7-4688-66c7-cfae8da2c164?t=1662652746399&download=true")',
          }}
        >
          <img
            className="mt-14 shadow-xl rounded-full w-36 h-36 bg-cover"
            src="https://media.licdn.com/dms/image/D4E03AQHiMkJslwxNkw/profile-displayphoto-shrink_800_800/0/1671124376960?e=2147483647&v=beta&t=0kuyeSnMXa2G0O6i0nm1SUteWwS3Thhn9399UIsA9iM"
            alt="doctor"
          />
        </div>
        <div className="row-span-1 px-4">
          <h5 className="text-lg font-bold text-center mt-3">
            Máximo Valentín
          </h5>
          <p className="text-center pb-5">Médico especialista en Dermatología</p>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
