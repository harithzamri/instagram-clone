/** @format */

import { useState, useEffect, useContext } from "react";

export default function useAuthListener() {
  const [user, setUser] = useState(localStorage.getItem("authUser"));
}
