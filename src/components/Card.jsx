import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "./Badge";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

const CardContainer = ({ status, velocity }) => {
  return (
    <Card
      style={{
        width: "400px",
        height: "225px",
        marginBottom: "25px"
      }}
    >
      <Card.Body style={{ padding: "20px" }}>
        <Card.Title
          style={{
            fontSize: "13px",
            color: "#6d51ff"
          }}
        >
          Amazon Product 2 Reviews
        </Card.Title>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between"
          }}
        >
          <div>
            <label className="text-label">
              <span className="bold-text">34,443</span>{" "}
              <span>Request (yesterday)</span>{" "}
              {velocity && <Badge text={velocity} />}
            </label>
            <label className="text-label">
              <span className="bold-text">156.9 MB</span>{" "}
              <span>Indexed Traffic (raw)</span>
            </label>
            <label className="text-label">
              <span className="bold-text">2.1 GB</span> <span>Data volume</span>
            </label>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "12px" }}
          >
            {status && status === "Enabled" ? (
              <>
                <BsFillCheckCircleFill
                  style={{ color: "#17a6ff", marginRight: "3px" }}
                />{" "}
                {status}
              </>
            ) : (
              <>
                <AiFillMinusCircle
                  style={{ color: "#ccc", marginRight: "3px" }}
                />{" "}
                {status}
              </>
            )}
          </div>
        </div>
        <div
          style={{
            height: "75px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontSize: "12px"
          }}
        >
          <small className="text-muted">
            {
              "Amazon Product 2 Reviews - Acer Aspire 5 Slim Laptop - https://www.amazon.com/Acer-Display-Graphics-Keyboard-A515-43-R19L/dp/B07RF1XD36/ref=asc_df_B07RF1XD36/?tag=hyprod-20&linkCode=df0&hvadid=366315397608&hvpos=&hvnetw=g&hvrand=3654191020369666928&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028263&hvtargid=pla-774382930249&psc=1&tag"
            }
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
