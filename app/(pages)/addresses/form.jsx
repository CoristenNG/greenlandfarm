"use client";
import { mutate } from "swr";
import {
    useSaveAddressMutation,
    useUpdateAddressMutation,
} from "../../redux/slices/addressSlice";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/cards/loading";

const AddressFormPage = ({ setShowAddressForm, showAddressForm }) => {
    const [saveAddress, { isLoading }] = useSaveAddressMutation();
    const [updateAddress, { isLoading: isUpdating }] =
        useUpdateAddressMutation();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        state: "",
        address: "",
    });

    const toUpdate = !!showAddressForm?._id;

    useEffect(() => {
        if (toUpdate) {
            setFormData(() => ({
                fullname: showAddressForm.fullname,
                email: showAddressForm.email,
                phone: showAddressForm.phone,
                state: showAddressForm.state,
                address: showAddressForm.address,
                _id: showAddressForm._id,
            }));
        }
    }, []);

    const handleSubmit = async () => {
        const uploadFunction = toUpdate ? updateAddress : saveAddress;
        const result = await uploadFunction(formData).unwrap();
        if (result.type === "success") {
            setShowAddressForm(false);
            mutate("/user/adddresses");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const loading = isLoading || isUpdating;
    return (
        <div className="max-w-full mx-auto bg-white">
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Region
                        </label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Enter your state"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your full address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        onClick={() => setShowAddressForm(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="add-location-button w-48"
                    >
                        {loading ? (
                            <LoadingSpinner />
                        ) : !toUpdate ? (
                            "Save Address"
                        ) : (
                            "Update Address"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressFormPage;
