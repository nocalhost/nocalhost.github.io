import React, { useState, useEffect } from "react";
import clsx from "clsx";
// import Layout from '@theme/Layout'
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import VideoModal from "../components/VideoModal";
import Translate from "@docusaurus/Translate";
import Head from "@docusaurus/Head";
import LayoutProviders from "@theme/LayoutProviders";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// Global namespace (backwards-compatibility)
// eslint-disable-next-line no-unused-vars

function newUrl(record) {
  var new_script = document.createElement("script");
  new_script.src = record;
  document.getElementsByTagName("head")[0].appendChild(new_script);
  return new Promise((resolve) => {
    new_script.onload = function () {
      resolve();
    };
  });
}

function checkFile(item) {
  return (
    item?.outerHTML.indexOf("js/three.min.js") !== -1 ||
    item?.outerHTML.indexOf("js/anime.min.js") !== -1 ||
    item?.outerHTML.indexOf("js/spline.runtime.min.js") !== -1 ||
    item?.outerHTML.indexOf("js/assets.js") !== -1 ||
    item?.outerHTML.indexOf("js/scene.js") !== -1 ||
    item?.outerHTML.indexOf("js/main.js") !== -1
  );
}

function removeFile() {
  const head = document.getElementsByTagName("head")[0];
  const scriptList = head.getElementsByTagName("script");
  Array.prototype.slice.call(scriptList).forEach((item) => {
    if (checkFile(item)) {
      head.removeChild(item);
    }
  });
}

export default function Home() {
  const [isZh, setIsZh] = useState(false);
  const [showVideoModal, setShowVideoModa] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const description = siteConfig.tagline;
  useEffect(() => {
    window.SPE = {};
    const loadJs = async () => {
      await newUrl("js/three.min.js");
      await newUrl("js/anime.min.js");
      await newUrl("js/spline.runtime.min.js");
      await newUrl("js/assets.js");
      await newUrl("js/scene.js");
      await newUrl("js/main.js");
    };
    if (!window.runtime) {
      loadJs();
    }

    setIsZh(location.pathname.indexOf("zh-CN") !== -1);
    return () => {
      removeFile();
    };
  }, []);

  return (
    <LayoutProviders>
      <Head>
        <title>{siteConfig.title}</title>
        <meta property="og:title" content={siteConfig.title} />
        {description != null && (
          <meta name="description" content={description} />
        )}
        {description != null && (
          <meta name="twitter:description" content={description} />
        )}
        {description != null && (
          <meta property="og:description" content={description} />
        )}
      </Head>
      <div className={styles.mdContainer}>
        {showVideoModal && (
          <VideoModal setShowVideoModa={setShowVideoModa}></VideoModal>
        )}
        <header className={styles.mdHeader}>
          <nav className={clsx(styles.mdGridTop, styles.mdHeaderNav)}>
            <div>
              <a href={isZh ? "/zh-CN" : "/"}>
                <img src="./img/home/logo-white.svg"></img>
              </a>
            </div>
            <div className={styles.mdTabsBlock}>
              <ul className={styles.mdTabsList}>
                <li className={clsx(styles.mdTabsItem, styles.xdHide)}>
                  <Link to="/">
                    <Translate>Home</Translate>
                  </Link>
                </li>

                <li className={clsx(styles.mdTabsItem, styles.xdHide)}>
                  <a
                    href={
                      isZh ? "/zh-CN/docs/introduction" : "/docs/introduction"
                    }
                  >
                    <Translate>Documentation</Translate>
                  </a>
                </li>
                <li className={clsx(styles.mdTabsItem, styles.xdHide)}>
                  <a
                    href={
                      isZh ? "/zh-CN/docs/quick-start" : "/docs/quick-start"
                    }
                  >
                    <Translate>Quick Start</Translate>
                  </a>
                </li>
                <li className={clsx(styles.mdTabsItem, styles.xdHide)}>
                  <a href={isZh ? "/zh-CN/tools" : "/tools"}>
                    <Translate>Tools</Translate>
                  </a>
                </li>
                <li className={clsx(styles.mdTabsItem, styles.xdHide)}>
                  <a href={isZh ? "/zh-CN/blog" : "/blog"}>
                    <Translate>Blog</Translate>
                  </a>
                </li>
                <li className={clsx(styles.mdTabsItem)}>
                  <a href={isZh ? "/" : "/zh-CN"}>
                    {isZh ? "English" : "中文"}
                  </a>
                </li>
                <li className={clsx(styles.mdTabsItem, styles.xdHide)}>
                  <a
                    href="https://github.com/nocalhost/nocalhost"
                    target="_blank"
                    title="Material for MkDocs Insiders"
                    className={styles.githubNav}
                    rel="noreferrer"
                  >
                    <img
                      className={styles.githubLogo}
                      src="img/home/mark-github.svg"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className={styles.txContainer} id="nocalhost">
          <div className={clsx(styles.mdTypeset, styles.mdGrid)}>
            <div className={styles.txHero}>
              <div className={styles.txHearHeaderBg}>
                <div className={styles.txHeroHeaderBgContainer}>
                  <div className={styles.txHeroHeaderBgLavender}></div>
                </div>
                <div className={styles.txHeroHeaderBgContainerEnd}>
                  <div className={styles.txHeroHeaderBgBlue}></div>
                </div>
                <div className={styles.txHeroHeaderBgContainerStart}>
                  <div className={styles.txHeroHeaderBgBlack}></div>
                </div>
                <div className={styles.txHeroHeaderBgContainerStart}>
                  <div className={styles.txHeroHeaderBgWhite}></div>
                </div>
                <div className={styles.txHeroHeaderBgContainer}>
                  <div className={styles.txHeroElementBubbles}></div>
                </div>
              </div>
              <div
                className={clsx(styles.txGeroContent, styles.txGeroContent1)}
              >
                <div className={styles.headerContent}>
                  <h1>
                    <Translate>Goodbye, localhost!</Translate>
                  </h1>

                  <p>
                    <strong>Nocalhost </strong>{" "}
                    <Translate>
                      is a cloud-native development tool based on IDE
                    </Translate>
                  </p>
                  <div className={styles.txHeroContentBtns}>
                    <div className={styles.startBtn}>
                      <a
                        href={
                          isZh ? "/zh-CN/docs/quick-start" : "/docs/quick-start"
                        }
                      >
                        <Translate>Quick Start</Translate>
                      </a>
                    </div>

                    <div className={styles.githubBtn}>
                      <a
                        href="https://github.com/nocalhost/nocalhost"
                        target="_blank"
                        title="Material for MkDocs Insiders"
                        rel="noreferrer"
                      >
                        <img
                          className={styles.githubLogo}
                          src="img/home/mark-github.svg"
                        ></img>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.header3d}>
                  <canvas id="canvas3d" className={styles.canvas3d}></canvas>
                </div>
              </div>
              <div
                className={clsx(styles.txGeroContent, styles.txHeroContent2)}
              >
                <div className={clsx(styles.h2, styles.titleFlex)}>
                  <span className={styles.circle}></span>
                  <h2>
                    <Translate>What is Nocalhost?</Translate>
                  </h2>
                </div>
                <div className={styles.videoImgBox}>
                  <div className={styles.videoName}>
                    <Translate>Nocalhost Overview</Translate>
                  </div>
                  <div className={styles.videoClickBox}>
                    <img
                      src="img/home/video-play.svg"
                      onClick={setShowVideoModa}
                    ></img>
                    <div className={styles.text}>
                      <Translate>Click to watch the video</Translate>
                    </div>
                  </div>
                </div>
                <div className={styles.cardsGroupContainer}>
                  <div className={styles.cardsGroup}>
                    <div className={styles.cardsGroupSection}>
                      <strong>
                        <Translate>It&apos;s a</Translate>
                      </strong>
                      <div className={styles.title}>
                        <p>
                          <Translate>Bridge between Cloud and IDE</Translate>
                        </p>
                      </div>
                      <p className={styles.detail}>
                        <Translate>
                          Code changes can instantly synchronize from IDE to
                          cloud, see changes under seconds, without image
                          commit, push or pull cycles.
                        </Translate>
                      </p>
                      <div className={styles.icon}>
                        <img src="img/home/section2-images-1.png"></img>
                      </div>
                    </div>
                    <div
                      className={styles.cardsGroupSection}
                      style={{ backgroundColor: "#0f2b34" }}
                    >
                      <strong>
                        <Translate>It&apos;s a</Translate>
                      </strong>
                      <div className={styles.title}>
                        <p>
                          <Translate>Space to Share Dev Environment</Translate>
                        </p>
                      </div>
                      <p className={styles.detail}>
                        <Translate>
                          Developers can share the same development environment
                          across the team, enjoying team collaboration.
                        </Translate>
                      </p>
                      <div className={styles.icon}>
                        <img src="img/home/section2-images-2.png"></img>
                      </div>
                    </div>
                    <div
                      className={styles.cardsGroupSection}
                      style={{ backgroundColor: "#0f2b34" }}
                    >
                      <strong>
                        <Translate>It&apos;s a</Translate>
                      </strong>
                      <div className={styles.title}>
                        <p>
                          <Translate>
                            Extension Toolsets of Kubernetes
                          </Translate>
                        </p>
                      </div>
                      <p className={styles.detail}>
                        <Translate>
                          Nocalhost can help developers to build Kubernetes
                          applications much easier and faster.
                        </Translate>
                      </p>
                      <div className={styles.icon}>
                        <img src="img/home/section2-images-3.png"></img>
                      </div>
                    </div>
                    <div
                      className={clsx(
                        styles.cardsGroupSection3,
                        styles.cardsGroupSection
                      )}
                      style={{ backgroundColor: "#fff" }}
                    >
                      <strong>
                        <Translate>It&apos;s a</Translate>
                      </strong>
                      <div className={styles.title}>
                        <p>
                          <Translate>
                            Spotlight On Explore MicroServices
                          </Translate>
                        </p>
                      </div>
                      <p className={styles.detail}>
                        <Translate>
                          Developers can directly develop and debug remote
                          designated microservices under the complex framework
                          through Nocalhost.
                        </Translate>
                      </p>
                      <div className={styles.icon}>
                        <img src="img/home/section2-images-4.png"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={clsx(styles.txGeroContent, styles.txHeroContent3)}
              >
                <div className={styles.topImg}></div>
                <div className={styles.bottomImg}></div>
                <div className={styles.h2}>
                  <span className={styles.circle}></span>
                  <h2>
                    <Translate>
                      Nocalhost is a new cloud-native development tool
                    </Translate>
                  </h2>
                </div>
                <div className={styles.content}>
                  <section>
                    <div className={styles.devModeIntro}>
                      <div className={styles.icon}>
                        <img src="img/home/section3-localhost-icon.svg"></img>
                      </div>
                      <div className={styles.devModeName}>
                        <div className={styles.title}>
                          <strong>Localhost</strong>
                          <Translate>Dev Mode</Translate>
                        </div>
                        <p>
                          <Translate>
                            Everyone codes in an isolated way.
                          </Translate>
                        </p>
                      </div>
                    </div>
                    <div className={styles.devModeContent}>
                      <div
                        className={clsx(styles.showImg, styles.localhostShow)}
                      >
                        <img src="img/home/section3-localhost-image.png"></img>
                      </div>
                      <ul className={styles.localhostList}>
                        <li>
                          <Translate>
                            Hard to develop large applications with limited
                            local resources
                          </Translate>
                        </li>
                        <li>
                          <Translate>
                            Difficult to setup and maintain the development
                            environment
                          </Translate>
                        </li>
                        <li>
                          <Translate>
                            Difficult for collaborative debugging
                          </Translate>
                        </li>
                        <li>
                          <Translate>
                            Gap between development environment and production
                            environment
                          </Translate>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <div className={styles.arrow}></div>
                  <section>
                    <div className={styles.devModeIntro}>
                      <div className={styles.icon}>
                        <img src="img/home/section3-nocalhost-icon.svg"></img>
                      </div>
                      <div className={styles.devModeName}>
                        <div className={styles.title}>
                          <strong>Nocalhost</strong>

                          <Translate>Dev Mode</Translate>
                        </div>
                        <p>
                          <Translate>
                            Nocalhost can empower any Kubernetes Cluster and
                            upgrade it to a collaborative development
                            environment for developers.
                          </Translate>
                        </p>
                      </div>
                    </div>
                    <div className={styles.devModeContent}>
                      <div
                        className={clsx(styles.showImg, styles.nolocalhostShow)}
                      >
                        <img src="img/home/section3-nocalhost-image.png"></img>
                      </div>
                      <ul className={styles.nocalhostList}>
                        <li>
                          <Translate>
                            Easy to handle large application development with
                            flexible cloud resources
                          </Translate>
                        </li>
                        <li>
                          <Translate>
                            Environment provisioning on demand
                          </Translate>
                        </li>
                        <li>
                          <Translate>
                            Easy to share the same development environment and
                            collaborative debugging
                          </Translate>
                        </li>
                        <li>
                          <Translate>Close to production environment</Translate>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div
                className={clsx(styles.txGeroContent, styles.txHeroContent4)}
              >
                <div className={styles.h2}>
                  <span className={styles.circle}></span>
                  <h2>
                    <Translate>Why Nocalhost?</Translate>
                  </h2>
                </div>

                <p>
                  <Translate>
                    Explore the difference between development locally and
                    development on the cloud.
                  </Translate>
                </p>
                <div className={styles.table}>
                  <img
                    src={
                      isZh
                        ? "img/home/section4-table-zh.png"
                        : "img/home/section4-table.svg"
                    }
                  ></img>
                  {/* <img src='img/home/section4-table.svg'></img> */}
                </div>
              </div>
              <div className={styles.whoUse}>
                <div className={styles.h2}>
                  <span className={styles.circle}></span>
                  <h2 style={{ color: "#fff" }}>
                    <Translate>See who uses Nocalhost</Translate>
                  </h2>
                </div>
                <div className={styles.whoUseCardBox}>
                  <div className={styles.whoUseCar}>
                    <img
                      src="img/home/consumer-uisee.png"
                      className={styles.logo}
                    ></img>
                    <div className={styles.title}>
                      <Translate id="uisee.title">UISEE </Translate>
                    </div>
                    <div className={styles.text}>
                      <Translate id="uisee.info">
                        UISEE is China's leading autonomous driving company,
                        using Nocalhost Server to pull up a development
                        environment for AI applications with one click, using
                        IDE plug-ins and one-click debugging to shorten the
                        development cycle.
                      </Translate>
                    </div>
                  </div>
                  <div className={styles.whoUseCar}>
                    <img
                      src="img/home/consumer-2.png"
                      className={styles.logo}
                    ></img>
                    <div className={styles.title}>
                      <Translate id="HongyaTechnology.title">
                        Hongya Technology
                      </Translate>
                    </div>
                    <div className={styles.text}>
                      <Translate id="HongyaTechnology.info">
                        Hongya Technology is a technology company that provides
                        superior services for information technology-related
                        majors. Its business includes teaching products and
                        school-enterprise cooperation. It uses Nocalhost to
                        improve business R&D efficiency (green pepper
                        classroom).
                      </Translate>
                    </div>
                  </div>
                  <div className={styles.whoUseCar}>
                    <img
                      src="img/home/consumer-4.png"
                      className={styles.logo}
                    ></img>
                    <div className={styles.title}>
                      <Translate id="XiaoyingTechnology.title">
                        Xiaoying Technology
                      </Translate>
                    </div>
                    <div className={styles.text}>
                      <Translate id="XiaoyingTechnology.info">
                        is an Internet company focusing on mobile video creation
                        tools and services. The company was established in June
                        2012 and is headquartered in Hangzhou. Round of
                        financing. Use Nocalhost to improve the research and
                        development efficiency of machine learning projects in
                        the K8s environment.
                      </Translate>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.startBtnSection}>
                <div className={styles.bottomBanner}>
                  <h3>
                    <Translate>
                      Developing Cloud-Native App with Nocalhost
                    </Translate>
                  </h3>
                  <div className={styles.bigStartBtnBox}>
                    <div className={styles.bigStartBtn}>
                      <a
                        href={
                          isZh ? "/zh-CN/docs/quick-start" : "/docs/quick-start"
                        }
                      >
                        <Translate>Quick start</Translate>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="nocalhost-footer" className={styles.footer}>
          <div className={styles["cncf-box"]}>
            <h4 class="text-center">
              Nocalhost is a &nbsp;
              <a href="https://www.cncf.io">
                Cloud Native Computing Foundation
              </a>
              &nbsp;sandbox project
            </h4>
            <img height="75px" src="img/cncf-color.svg" alt="CNCF" />
          </div>
          <div className={styles.footerContent}>
            <img src="img/home/logo-black.svg" height="60px"></img>
            <p>
              <a href="https://coding.net">Coding.net</a>
              &nbsp;&&nbsp;
              <a href="https://github.com/nocalhost/nocalhost/graphs/contributors">
                Nocalhost Project Authors
              </a>
              © 2021
            </p>
          </div>
        </footer>
      </div>
    </LayoutProviders>
  );
}
