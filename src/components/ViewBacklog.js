import React, { useContext } from "react";
import { BacklogContext } from "../context/BacklogState";
import { Container, Row, Col, Stack } from "react-bootstrap";

export default function ViewBacklog() {
  const [state, setState] = useContext(BacklogContext);

  // ********************************** Click Functionality *****************************************
  const clickEvent = (id, cid, click) => {
    const backlogCard = state.map((state) => {
      return state.id === id
        ? state.cards.find((el)=>el.cid === cid) : state;
    });

    const newState = state.map((obj) => {
      if (click > 1 ? obj.id === id-1 : obj.id === id+1) {
        obj.cards.unshift(backlogCard[id-1]);
        return { ...obj, cards: obj.cards };
      }

      if (obj.id === id) {
        return {...obj,cards: obj.cards.filter((el) => el.cid !== cid)};
      }

      return obj;
    });

    setState(newState);
  };

  // ********************************** Delete Functionality *****************************************
  const deleteTask = (id, cid) => {
    const newState = state.map((obj) => {
      if (obj.id === id) {
        return {...obj, cards: obj.cards.filter((el) => el.cid !== cid)};
      }
      return obj;
    });

    setState(newState);
  };
  
  return (
    <div>
      <Container>
        <Row className="mt-2">
          <Col lg={12}>
            <h3>View Backlog Details</h3>
          </Col>
          <Stack direction="horizontal" gap={4}>
            <Col lg={3} className="border p-1 text-center">
              Backlog
            </Col>
            <Col lg={3} className="border p-1 text-center">
              ToDo
            </Col>
            <Col lg={3} className="border p-1 text-center">
              InProgress
            </Col>
            <Col lg={3} className="border p-1 text-center">
              Done
            </Col>
          </Stack>
          <Stack direction="horizontal" gap={4}>
            {state.map((state) => (
              <Col lg={3} key={state.id} className="mt-3">
                {state.cards.map((cards) => (
                  <div key={cards.cid}>
                    <p>{cards.name}</p>
                    <p>
                      <button
                        className="btn-primary mybtn"
                        onClick={() => clickEvent(state.id, cards.cid, 2)}
                        disabled={
                          state.id === 1 || state.id === 4
                        }
                      >
                        {"<"}
                      </button>
                      <button
                        className="btn-primary mybtn"
                        onClick={() => clickEvent(state.id, cards.cid, 1)}
                        disabled={state.id === 4}
                      >
                        {">"}
                      </button>
                      <button
                        className="btn-danger mybtn"
                        onClick={() => deleteTask(state.id, cards.cid)}
                      >
                        {"x"}
                      </button>
                    </p>
                  </div>
                ))}
              </Col>
            ))}
          </Stack>
        </Row>
      </Container>
    </div>
  );
}
