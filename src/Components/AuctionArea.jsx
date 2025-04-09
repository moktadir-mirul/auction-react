import React from "react";
import Table from "./Table";

function AuctionArea() {
    return (
        <div className="bg-color p-10 md:p-20 space-y-5">
            <h1 className="sora font-medium text-blue-950 text-2xl">Active Auctions</h1>
            <p className="text-sm sora font-normal text-gray-800">
            Discover and bid on extraordinary items
            </p>
            <Table></Table>
        </div>
    )
}

export default AuctionArea;