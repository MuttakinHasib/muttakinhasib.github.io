import Head from "next/head";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Container } from "../components";
import Loader from "../components/Loader";
import { container, item } from "../components/sections/Landing";
import Tree from "react-d3-tree";
import { familyTree } from "../data/family";
import { useRef } from "react";
import { useEffect } from "react";

const FamilyTree = () => {
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState(undefined);
  const [translateX, setTranslateX] = useState(850);
  const [translateY, setTranslateY] = useState(200);
  const treeContainer = useRef(null);

  const toggleCenterNodes = () => {
    if (dimensions !== undefined) {
      setDimensions(undefined);
    } else {
      if (treeContainer) {
        const { width, height } = treeContainer.getBoundingClientRect();
        setDimensions({
          width,
          height,
        });
      }
    }
  };

  useEffect(() => {
    const dimensions = treeContainer?.current?.getBoundingClientRect();
    if (dimensions) {
      setTranslateX(dimensions.width / 2.5);
      setTranslateY(dimensions.height / 2);
    }
  }, [treeContainer]);

  return (
    <React.Fragment>
      {loading && <Loader {...{ loading, setLoading }} />}
      <Head>
        <title>Hasib - Family Tree</title>
      </Head>
      {!loading && (
        // <Container className="relative z-50">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="min-h-[90vh] md:pt-[100px] relative overflow-hidden"
        >
          <motion.div variants={item}>
            <h1
              className="tracking-[1.5px] text-[35px] sm:text-[40px] md:text-[50px] lg:text-[65px] leading-[1.1] font-semibold uppercase text-blueWhite text-center"
              style={{ wordSpacing: "4px" }}
            >
              Family Tree
            </h1>
          </motion.div>
          <motion.div
            ref={(ref) => (treeContainer.current = ref)}
            variants={item}
            className="min-h-[90vh]"
          >
            <Tree
              svgClassName="min-h-screen !stroke-[#fff]"
              data={familyTree}
              translate={{ x: translateX, y: translateY }}
              initialDepth={1}
              transitionDuration={500}
              // scaleExtent={{ min: 1.2 }}
              dimensions={dimensions}
              hasInteractiveNodes
              orientation="vertical"
              enableLegacyTransitions
              centeringTransitionDuration={8000}
              rootNodeClassName="!fill-[#fff] !stroke-[#fff]"
              branchNodeClassName="!fill-[#fff] !stroke-[#fff]"
              leafNodeClassName="!fill-[#fff] !stroke-[#fff]"
            />
          </motion.div>
        </motion.div>
        // </Container>
      )}
    </React.Fragment>
  );
};

export default FamilyTree;
