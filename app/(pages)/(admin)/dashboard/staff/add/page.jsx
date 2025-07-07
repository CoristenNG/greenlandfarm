"use client";
import Label from "../../../../../components/form/Label";
import PageBreadcrumb from "../../../../../components/common/PageBreadCrumb";
import React, { useState } from "react";
import Input from "../../../../../components/form/input/InputField";
import PhoneInput from "../../../../../components/form/group-input/PhoneInput";
import { Camera, ChevronDown } from "lucide-react";
import Select from "../../../../../components/form/Select";
import ProfilePictureUploader from "../../../../../components/fileUpload";
import LoadingSpinner from "../../../../../components/cards/loading";
import Button from "../../../../../components/ui/button/Button";

const roles = [
    { value: "staff", label: "Staff" },
    { value: "admin", label: "Store Admin" },
    { value: "super", label: "Super Admin" },
];

export default function FormElements() {
    const [localProfile, setLocalProfile] = useState("");
    return (
        <div>
            <PageBreadcrumb pageTitle="Add New Staff" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <div className="space-y-6">
                        <ProfilePictureUploader
                            setFiles={() => {}}
                            setLocalFiles={setLocalProfile}
                            directUpload={
                                (base64) => {}
                                // updateImage({
                                //     picture: base64,
                                //     type: "profile_image",
                                //     state: "add",
                                // })
                            }
                            component={
                                <div className="mb-8">
                                    <div className="relative inline-block">
                                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                            {!0 ? (
                                                <img
                                                    src={
                                                        localProfile
                                                            ? URL?.createObjectURL(
                                                                  localProfile[0]
                                                              )
                                                            : "user"?.picture ||
                                                              "/images/profile_placeholder.png"
                                                    }
                                                    className="rounded-full w-full h-full object-cover"
                                                />
                                            ) : (
                                                <LoadingSpinner />
                                            )}
                                        </div>
                                        <button className="absolute bottom-0 right-0 bg-gray-600 text-white rounded-full p-1.5 hover:bg-gray-700 transition-colors">
                                            <Camera size={14} />
                                        </button>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                    <div>
                        <Label>Full Name</Label>
                        <Input type="text" placeholder="Enter your full name" />
                    </div>
                    <div>
                        <Label>Email Address</Label>
                        <Input type="email" placeholder="info@urbanlagos.com" />
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <PhoneInput
                            selectPosition="start"
                            countries={[{ code: "NG", value: "+234" }]}
                            placeholder="+234 (555) 000-0000"
                            onChange={() => {}}
                        />
                    </div>
                    <div>
                        <Label>Role</Label>
                        <div className="relative">
                            <Select
                                options={roles}
                                placeholder="Select Option"
                                onChange={() => {}}
                                className="dark:bg-dark-900"
                            />
                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                <ChevronDown />
                            </span>
                        </div>
                    </div>
                    <div>
                        <Button className="w-full" size="sm">
                            Create Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
