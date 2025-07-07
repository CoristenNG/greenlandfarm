"use client";
const {
    default: SettingsWrapper,
} = require("../../components/wrapper/accountWrapper");
import { Check, Edit, Edit2, MapPinned, Trash } from "lucide-react";
import "../../styles/Cart.css";
import { useState } from "react";
import AddressFormPage from "./form";
import useSWR, { mutate } from "swr";
import {
    useAsDefaultMutation,
    useDeleteAddressMutation,
} from "../../redux/slices/addressSlice";

const Addresses = () => {
    const [setAsDefault, { isLoading: settingAsDefault }] =
        useAsDefaultMutation();
    const [deleteAddress, { isLoading: isDeleting }] =
        useDeleteAddressMutation();
    const [showAddressForm, setShowAddressForm] = useState(false);
    const { data, isLoading } = useSWR("/user/addresses");
    const [selectedAddress, setSelectedAddress] = useState("");
    const savedAddresses = data?.data || [];
    console.log(selectedAddress);

    const handleSetAsDefault = async (data) => {
        const result = await setAsDefault(data).unwrap();
        if (result.type === "success") {
            setSelectedAddress(data?._id);
            mutate("/user/adddresses");
        }
    };

    const handleDelete = async (id) => {
        const result = await deleteAddress(id).unwrap();
        if (result.type === "success") {
            mutate("/user/adddresses");
        }
    };

    return (
        <SettingsWrapper page="addresses">
            {/* Shipping Address Section */}
            <div className="shipping-section  w-full m-6 ">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Shipping Address
                </h2>

                {!showAddressForm ? (
                    savedAddresses.length === 0 ? (
                        <div className="flex flex-col justify-center items-center">
                            <MapPinned
                                size={40}
                                color="#ccc"
                                className="map-icon !mb-8"
                            />
                            <p>No address saved</p>
                            <p className="address-subtext">
                                Add an address so we can show you exact costs
                                and delivery
                            </p>
                            <button
                                onClick={() => setShowAddressForm(true)}
                                className="add-location-button"
                            >
                                Add new locations
                            </button>
                        </div>
                    ) : (
                        <div className="saved-addresses">
                            {savedAddresses.map((address) => {
                                const selected =
                                    selectedAddress ||
                                    (!selectedAddress && address.selected);
                                return (
                                    <div
                                        key={address._id}
                                        className={`border relative rounded-lg p-4 mb-4 cursor-pointer transition-all ${
                                            selected
                                                ? "border-green-500 bg-green-50"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                                            selected
                                                                ? "border-green-500 bg-green-500"
                                                                : "border-gray-300"
                                                        }`}
                                                        onClick={() =>
                                                            handleSetAsDefault(
                                                                address
                                                            )
                                                        }
                                                    >
                                                        {selected && (
                                                            <Check className="w-3 h-3 text-white" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-gray-800">
                                                            {address.fullname}
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            {address.phone}
                                                        </p>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            {address.address}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            {address.state}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute top-5 right-5">
                                            <Trash
                                                size={18}
                                                color="red"
                                                onClick={() =>
                                                    handleDelete(address._id)
                                                }
                                            />
                                            <Edit
                                                size={18}
                                                color="black"
                                                className="mt-5"
                                                onClick={() =>
                                                    setShowAddressForm(address)
                                                }
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                            <button
                                onClick={() => setShowAddressForm(true)}
                                className="add-location-button !mt-6"
                            >
                                Add new address
                            </button>
                        </div>
                    )
                ) : (
                    <AddressFormPage
                        showAddressForm={showAddressForm}
                        setShowAddressForm={setShowAddressForm}
                    />
                )}
            </div>
        </SettingsWrapper>
    );
};

export default Addresses;
