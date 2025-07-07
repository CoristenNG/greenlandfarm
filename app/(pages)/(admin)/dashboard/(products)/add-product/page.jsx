"use client";
import PageBreadcrumb from "../../../../../components/common/PageBreadCrumb";
import DropzoneComponent from "../../../../../components/form/form-elements/DropZone";
import React, { useState } from "react";
import Label from "../../../../../components/form/Label";
import Input from "../../../../../components/form/input/InputField";
import MultiSelect from "../../../../../components/form/MultiSelect";
import TextArea from "../../../../../components/form/input/TextArea";
import Select from "../../../../../components/form/Select";
import ComponentCard from "../../../../../components/common/ComponentCard";
import Checkbox from "../../../../../components/form/input/Checkbox";
import Button from "../../../../../components/ui/button/Button";

export default function FormElements() {
    const [isChecked, setIsChecked] = useState(false);
      const [isCheckedTwo, setIsCheckedTwo] = useState(true);
      const [isCheckedDisabled, setIsCheckedDisabled] = useState(false);
    const multiOptions = [
        { value: "pcs", text: "Pieces", selected: false },
        { value: "kg", text: "Kg", selected: false },
        { value: "bag", text: "Bag", selected: false },
        { value: "sct", text: "Sachet", selected: false },
        { value: "litter", text: "Litter", selected: false },
    ];
    const options = [
        { value: "marketing", label: "Marketing" },
        { value: "template", label: "Template" },
        { value: "development", label: "Development" },
    ];
    
    return (
        <div>
            <PageBreadcrumb pageTitle="Add Product" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <div>
                        <Label>Product Name</Label>
                        <Input type="text" placeholder="Enter your full name" />
                    </div>
                    <div>
                        <Label>Product Price</Label>
                        <Input type="number" placeholder="₦30,000" />
                    </div>
                    <div>
                        <Label>Category</Label>
                        <Select
                            options={options}
                            placeholder="Select Category"
                            onChange={() => {}}
                            className="dark:bg-dark-900"
                        />
                    </div>
                    <div className="relative">
                        <MultiSelect
                            label="Unit of Measurement (UOM)"
                            options={multiOptions}
                            defaultSelected={["kg", "pcs"]}
                            onChange={(values) => {}}
                        />
                        <p className="sr-only">
                            Selected Values: {[].join(", ")}
                        </p>
                    </div>

                    <div>
                        <Label>Description</Label>
                        <TextArea
                            value={"message"}
                            onChange={(value) => {}}
                            rows={6}
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <DropzoneComponent />
                    <ComponentCard title="Delivery Method">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    checked={isChecked}
                                    onChange={setIsChecked}
                                />
                                <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Pickup
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    checked={isCheckedTwo}
                                    onChange={setIsCheckedTwo}
                                    label="Shipping"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    checked={isCheckedDisabled}
                                    onChange={setIsCheckedDisabled}
                                    label="Waybilling"
                                />
                            </div>
                        </div>
                    </ComponentCard>
                    <div>
                        <Button className="w-full" size="sm">
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
