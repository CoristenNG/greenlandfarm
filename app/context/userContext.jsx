/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { usePathname, useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import useSWR from "swr";
import { isAuthenticated } from "../redux/api/axiosBaseQuery";
const { createContext, useEffect, useState } = require("react");

const defaultProvider = {
    cartedProds: [],
    savedProds: [],
    cartData: {},
    userInfo: {},
    selectedAddress: {},
    isAuthenticated: true,
    notifications: [],
    loading: false,
    setLoading: () => {},
    seletedCartProds: [],
    selectCartProd: () => {},
};
const DataContext = createContext(defaultProvider);

const UserDataProvider = ({ children, setOverflow }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [notifications, setNotification] = useState([]);
    const [loading, setLoading] = useState(false);
    const [seletedCartProds, selectCartProd] = useState([]);
    const getPath = pathname.split("/");

    useEffect(() => {
        // "login",
        //       "create-account",
        //       "otp",
        // "forgot-password",
        //       "reset-password",
        const whiteList = ["auth", " ", "shop", "about-us", "contact-us"];
        console.log(getPath.length);
        console.log(isAuthenticated(), "isAuthenticated");
        if (
            !isAuthenticated() &&
            !whiteList.includes(getPath[getPath.length - 2]) 
            // getPath.length > 2
        ) {
            router.replace(`/auth/login?returnurl=${pathname.substring(1)}`);
        }
    }, [getPath, router]);

    const {
        data: userInfo,
        error: userErr,
        isLoading: userIsLoading,
    } = useSWR(isAuthenticated() && "/user/get-account");

    useEffect(() => {
        // setConnection(userInfo?.user?.push_subscription);
    }, [userInfo]);

    const {
        data: notif,
        error: notifErr,
        isLoading: notifIsLoading,
    } = useSWR(isAuthenticated() && "/user/notification");

    const loadNotif = (!notifErr && !notifIsLoading && notif?.data) || [];

    useEffect(() => {
        setNotification(loadNotif);
    }, [notif]);
    //
    //
    // fetch CARTiNFO
    //
    //
    const {
        data: cartData,
        error: cartErr,
        isLoading: cartIsLoading,
    } = useSWR(isAuthenticated() && "/user/cart");
    //
    // fetch CARTiNFO
    //
    const {
        data: savedData,
        error: savedErr,
        isLoading: savedIsLoading,
    } = useSWR(isAuthenticated() && "/user/save-item/prods");

    return (
        <DataContext.Provider
            value={{
                cartedProds:
                    (!cartErr &&
                        !cartIsLoading &&
                        cartData?.data?.cartedProds) ||
                    [],
                savedProds:
                    (!savedErr && !savedIsLoading && savedData?.data) || [],
                cartData: (!cartErr && !cartIsLoading && cartData?.data) || {},
                userInfo: (!userErr && !userIsLoading && userInfo?.user) || {},
                notifications,
                selectedAddress: {},
                loading,
                setLoading: setLoading,
                seletedCartProds,
                selectCartProd,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
export { UserDataProvider, DataContext };
