import React, { useContext } from "react";
import { BacklogContext } from "../context/BacklogState";
import { Container, Row, Col, Stack } from "react-bootstrap";

export default function ViewBacklog() {
  const [state, setState] = useContext(BacklogContext);

  // ************************ Left Click Functionality *****************************************
  const leftClick = (id, cid) => {
    const backlogCard = state.map((state) => {
      return state.id === id
        ? state.cards.filter((card) => {
            if (card.cid === cid) {
              return card;
            }
          })
        : state;
    });

    const newTodoCard = {
      name: backlogCard[id - 1][0].name,
      stage: id - 2,
      cid: backlogCard[id - 1][0].cid,
    };

    const newState1 = state.map((obj) => {
      if (obj.id === id - 1) {
        obj.cards.push(newTodoCard);
        return { ...obj, cards: obj.cards };
      }

      if (obj.id === id) {
        return {
          ...obj,
          cards: obj.cards.filter((el) => {
            return el.cid !== cid;
          }),
        };
      }

      return obj;
    });

    setState(newState1);
  };

  // ************************ Right Click Functionality *****************************************
  const rightClick = (id, cid) => {
    const backlogCard = state.map((state) => {
      return state.id === id
        ? state.cards.filter((card) => {
            if (card.cid === cid) {
              return card;
            }
          })
        : state;
    });

    const newTodoCard = {
      name: backlogCard[id - 1][0].name,
      stage: id,
      cid: backlogCard[id - 1][0].cid,
    };

    const newState1 = state.map((obj) => {
      if (obj.id === id + 1) {
        obj.cards.push(newTodoCard);
        return { ...obj, cards: obj.cards };
      }

      if (obj.id === id) {
        return {
          ...obj,
          cards: obj.cards.filter((el) => {
            return el.cid !== cid;
          }),
        };
      }

      return obj;
    });

    setState(newState1);
  };

  const deleteTask = (id, cid) => {
    const newState1 = state.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          cards: obj.cards.filter((el) => {
            return el.cid !== cid;
          }),
        };
      }
      return obj;
    });

    setState(newState1);
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
                        onClick={() => leftClick(state.id, cards.cid)}
                        disabled={
                          state.id === 1 || state.id === 4
                        }
                      >
                        {"<"}
                      </button>
                      <button
                        className="btn-primary mybtn"
                        onClick={() => rightClick(state.id, cards.cid)}
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
