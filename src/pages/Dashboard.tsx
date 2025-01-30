import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

import userImg from "../assets/userImg.png";

const Dashboard = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar />

            <main className="dashboard">
                <div className="bar">
                    <BsSearch />
                    <input type="text" placeholder="Search for data, users, docs" />
                    <FaRegBell />
                    <img src={userImg} alt="User" />
                </div>

                <section className="widgetContainer">
                    <WidgetCard
                        percent={40}
                        amount={true}
                        value={34000}
                        heading="Revenue"
                        color="rgb(0, 155, 255)"
                    />

                    <WidgetCard
                        percent={-14}
                        value={400}
                        heading="Users"
                        color="rgb(0, 198, 202)"
                    />

                    <WidgetCard
                        percent={80}
                        value={18000}
                        heading="Transactions"
                        color="rgb(255, 196, 0)"
                    />

                    <WidgetCard
                        percent={30}
                        value={1000}
                        heading="Products"
                        color="rgb(76, 0, 255)"
                    />
                </section>

                <section className="graphContainer">
                    <div className="revenue-chart">
                        <h2>Revenue & Transaction</h2>
                        {/* Graph here */}
                    </div>

                    <div className="dashboard-categories">
                        <h2>Inventory</h2>

                        <div>
                            <CategoryItem heading="Laptops" value={70} color="hsl(89, 100%, 50%)" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

interface widgetCardProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: false;
}

const WidgetCard = ({
    heading,
    value,
    color,
    percent,
    amount,
}: widgetCardProps) => (
    <article className="widget">
        <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{amount ? `$${value}` : value}</h4>
            {percent > 0 ? (
                <span className="green">
                    <HiTrendingUp /> +{percent}%
                </span>
            ) : (
                <span className="red">
                    <HiTrendingDown /> {percent}%
                </span>
            )}
        </div>

        <div
            className="widgetCircle"
            style={{
                background: `conic-gradient(
               ${color} ${(Math.abs(percent) / 100) * 360}deg,
               rgb(255, 255, 255) 0
            )`,
            }}
        >
            <span
                style={{
                    color,
                }}
            >
                {percent}%
            </span>
        </div>
    </article>
);

interface CategoryItemProps {
    color: string;
    value: number;
    heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) =>
    <div className="category-item">
        <h5>{heading}</h5>
        <div>
            <div style={{
                backgroundColor: color,
                width: `${value}%`
            }}>
            </div>
        </div>

        <span>{value}%</span>
    </div>;

export default Dashboard;
