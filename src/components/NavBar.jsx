import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../panda.svg";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
          {/* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */}

          <Link to="/">
            <img
              src={logo}
              alt="store"
              className="navbar-brand logo container"
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                {" "}
                FancieTrends{" "}
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/products" className="nav-link">
                {" "}
                products{" "}
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              Shopping cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
