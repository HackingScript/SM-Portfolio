import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark py-3">
      <div className="container text-light">
        <div className="text-center mt-3 ">
          <small className="text-light">
            Copyright &copy; {new Date().getFullYear()} All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
