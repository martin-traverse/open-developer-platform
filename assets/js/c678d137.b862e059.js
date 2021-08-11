"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>o})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>i});var a=n(2263),o=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},1480:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=(n(4996),["components"]),s={id:"java",title:"Java"},l=void 0,p={unversionedId:"development-infrastructure/continuous-integration/java",id:"development-infrastructure/continuous-integration/java",isDocsHomePage:!1,title:"Java",description:"The Foundation hosts several Java projects and provides a good level of support for building, testing and releasing Java code.",source:"@site/../docs/development-infrastructure/continuous-integration/java.mdx",sourceDirName:"development-infrastructure/continuous-integration",slug:"/development-infrastructure/continuous-integration/java",permalink:"/docs/development-infrastructure/continuous-integration/java",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/java.mdx",version:"current",frontMatter:{id:"java",title:"Java"},sidebar:"mainSidebar",previous:{title:"C#",permalink:"/docs/development-infrastructure/continuous-integration/csharp"},next:{title:"Javascript",permalink:"/docs/development-infrastructure/continuous-integration/javascript"}},u=[{value:"Build",id:"build",children:[]},{value:"Artifact publishing",id:"artifact-publishing",children:[{value:"Publishing settings",id:"publishing-settings",children:[]},{value:"Maven Central Badge",id:"maven-central-badge",children:[]}]},{value:"Release",id:"release",children:[{value:"Release settings",id:"release-settings",children:[]},{value:"Known issues",id:"known-issues",children:[]}]},{value:"Project Documentation",id:"project-documentation",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Foundation hosts ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/finos?q=&type=&language=java"},"several Java projects")," and provides a good level of support for building, testing and releasing Java code."),(0,r.kt)("p",null,"The most adopted (68% in 2016, ",(0,r.kt)("a",{parentName:"p",href:"https://pages.zeroturnaround.com/RebelLabs-Developer-Productivity-Report-2016.html"},"according to RebelLabs"),") build tool for Java is ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),", which provides a standard, modular, convention-based model to build and publish your Java projects; as such, the Foundation provides a Maven Module called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/finos/finos-parent-pom"},"Parent POM"),", containing build configurations that can be easily inherited by the single projects; in provides:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plugin configuration for the most common Maven functionalities"),(0,r.kt)("li",{parentName:"ol"},"Nightly-built (in Maven terms, snapshots) deployment into Sonatype OSS public repository (oss.sonatype.org)"),(0,r.kt)("li",{parentName:"ol"},"Release deployment on the Central Repository"),(0,r.kt)("li",{parentName:"ol"},"Rules to validate Central Repository code requirements"),(0,r.kt)("li",{parentName:"ol"},"Other integrations for checks and validations")),(0,r.kt)("p",null,"You can also adopt other Java build tools, such as ",(0,r.kt)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),", ",(0,r.kt)("a",{parentName:"p",href:"https://ant.apache.org/"},"Ant"),", ",(0,r.kt)("a",{parentName:"p",href:"https://leiningen.org/"},"Leiningen")," or others, assuming that they are able to interact with the Central Repository."),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"The build process aims to produce reusable Java binaries (",(0,r.kt)("strong",{parentName:"p"},"artifacts"),", in Maven terms) in a reliable and reproducible way, from every contributor or consumer workstation; special build requirements should be documented in the project homepage."),(0,r.kt)("p",null,"The Maven command to build artifacts is ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn package"),"."),(0,r.kt)("h2",{id:"artifact-publishing"},"Artifact publishing"),(0,r.kt)("p",null,"All Java projects hosted by the Foundation are expected to use a groupId that is (or prefixed by) ",(0,r.kt)("inlineCode",{parentName:"p"},"org.finos")," and are published on the ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/#search%7Cga%7C1%7Corg.finos"},"Maven central repository")," (also known as Maven Central)."),(0,r.kt)("p",null,"In order to publish artifacts (in Maven terms, ",(0,r.kt)("strong",{parentName:"p"},"artifact deployment"),"), it's necessary to setup some accounts and configure the workstation accordingly; please note that these steps are not mandatory for all project teams, but only for those performing artifact deployment and releases (normally the project lead or a team member elected as release manager)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign up on ",(0,r.kt)("a",{parentName:"li",href:"https://issues.sonatype.org"},"https://issues.sonatype.org")," (",(0,r.kt)("inlineCode",{parentName:"li"},"https://oss.sonatype.org")," Maven repo will use these credentials for authentication)."),(0,r.kt)("li",{parentName:"ol"},"Email ",(0,r.kt)("a",{parentName:"li",href:"mailto:help@finos.org"},"help@finos.org"),", with the GitHub URL of your project, and your Sonatype Jira ID (from step 1)"),(0,r.kt)("li",{parentName:"ol"},"Update your Maven ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.xml")," file as ",(0,r.kt)("a",{parentName:"li",href:"#publishing-settings"},"shown below"),"; using Maven encrypted passwords is strongly advised, to avoid setting up the password in clear text")),(0,r.kt)("p",null,"At this point, you can proceed with the deployment of the snapshot artifacts, by simply invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn deploy")," from the project root folder; as a result, artifacts will be publicly available on ",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org"},(0,r.kt)("inlineCode",{parentName:"a"},"oss.sonatype.org"))," and usable by anyone as Maven dependencies."),(0,r.kt)("p",null,"You can find more info on the ",(0,r.kt)("a",{parentName:"p",href:"https://central.sonatype.org/pages/apache-maven.html#distribution-management-and-authentication"},"Central Repository howto page for Maven"),"."),(0,r.kt)("h3",{id:"publishing-settings"},"Publishing settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<settings>\n  <servers>\n    <server>\n      <id>ossrh</id>\n      <username>[your-sonatype-jira-id]</username>\n      <password>[your-sonatype-jira-pwd]</password>\n    </server>\n    <server>\n      <id>ossrh-distro</id>\n      <username>[your-sonatype-jira-id]</username>\n      <password>[your-sonatype-jira-pwd]</password>\n    </server>\n  </servers>\n</settings>\n")),(0,r.kt)("h3",{id:"maven-central-badge"},"Maven Central Badge"),(0,r.kt)("p",null,"A badge can be added at the top of the project's root-level ","[README.md]"," file, using the following Markdown syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[![Maven Central](https://img.shields.io/maven-central/v/org.finos/<project name>.svg?maxAge=2592000)](https://search.maven.org/#artifactdetails%7Corg.finos%7C<project name>%7C2%7Cpom)\n")),(0,r.kt)("p",null,"If you want to run this process continuously for each commit, you can integrate with ",(0,r.kt)("a",{parentName:"p",href:"intro"},"Travis CI or other Continuous Integration systems"),"."),(0,r.kt)("h2",{id:"release"},"Release"),(0,r.kt)("p",null,"The Maven release process performs the following activities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify that there are no uncommitted changes in the local workspace."),(0,r.kt)("li",{parentName:"ol"},"Prompt the user for the desired tag, release and development version names."),(0,r.kt)("li",{parentName:"ol"},"Modify and commit release information into the pom.xml file."),(0,r.kt)("li",{parentName:"ol"},"Tag the entire project source tree with the new tag name."),(0,r.kt)("li",{parentName:"ol"},"Extract file revisions versioned under the new tag name."),(0,r.kt)("li",{parentName:"ol"},"Deploy the versioned artifacts to appropriate local and remote repositories.")),(0,r.kt)("p",null,"All the configurations documented in the section above (see snapshot deployment) also apply to the release process; additionally, it is required to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://central.sonatype.org/pages/working-with-pgp-signatures.html"},"Install gpg")," on the local workstation where the release process is invoked"),(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"#release-settings"},"settings.xml as shown below")),(0,r.kt)("li",{parentName:"ol"},"Test a snapshot deployment (see above), to make sure that you can authenticate against Sonatype servers")),(0,r.kt)("p",null,"At this point you can ",(0,r.kt)("strong",{parentName:"p"},"proceed with the release"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"export GPG_TTY=$(tty)")),(0,r.kt)("li",{parentName:"ol"},"Run the maven command ",(0,r.kt)("inlineCode",{parentName:"li"},"mvn release:prepare release:perform -Prelease"),"; the release profile will provide javadocs, sources and gpg signature configuration for the build; if you're not using ",(0,r.kt)("inlineCode",{parentName:"li"},"finos-parent-pom"),", you'd need to configure these plugins by yourself; feel free to copy bits and pieces from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/finos/finos-parent-pom/blob/master/pom.xml"},"FINOS parant ",(0,r.kt)("inlineCode",{parentName:"a"},"pom.xml"))),(0,r.kt)("li",{parentName:"ol"},"Promote the staged artifacts by accessing the ",(0,r.kt)("a",{parentName:"li",href:"https://central.sonatype.org/pages/releasing-the-deployment.html"},"Nexus staging repositories")," to:\na. Identify which repository refers to the release process performed on step ",(0,r.kt)("strong",{parentName:"li"},"#1"),". Look at the description column to identify the specific project (look towards bottom of list).\nb. Select the staging repository. To release the request, click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Close")," (button on top menu) the release request - this operation will trigger a validation of the artifacts to be released\nc. Click on the refresh button to update status of repository.  Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Release")," (button on top menu) to sync artifacts with the Central Repository and remove staging repository. ")),(0,r.kt)("p",null,"Upon release, your component will be published to Central: this typically occurs within 10 minutes, though updates to ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/"},"search")," can take up to two hours.  You can also ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=aO-QFRsYxN4"},"watch this youtube video")," to know more about the Nexus staging lifecycle."),(0,r.kt)("h3",{id:"release-settings"},"Release settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<settings>\n  ...\n  <profiles>\n    <profile>\n      <id>ossrh</id>\n      <activation>\n        <activeByDefault>true</activeByDefault>\n      </activation>\n      <properties>\n        <gpg.executable>gpg2</gpg.executable>\n      </properties>\n    </profile>\n  </profiles>\n</settings>\n")),(0,r.kt)("h3",{id:"known-issues"},"Known issues"),(0,r.kt)("p",null,'If the release command fails with "gpg: signing failed: Inappropriate ioctl for device", run the following command and try again; ',(0,r.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/a/257065"},"more info on stackexchange"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export GPG_TTY=$(tty)\n")),(0,r.kt)("h2",{id:"project-documentation"},"Project Documentation"),(0,r.kt)("p",null,"Maven allows to generate a documentation website in HTML format and provides different options to publish such content on remote servers; content is composed by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.oracle.com/technetwork/articles/java/index-137868.html"},"Javadocs")," - can be easily generated using the ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-javadoc-plugin/"},"maven-javadoc-plugin"),", which is already configured to run during the build by the FINOS Parent Pom; the documentation is delivered in HTML format and included in the target/site/apidocs project sub-folder; to invoke the javadoc generation manually, you can invoke ",(0,r.kt)("inlineCode",{parentName:"li"},"mvn javadoc:javadoc"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-site-plugin/examples/configuring-reports.html"},"Reporting")," - to collect different metrics from Maven build plugins and publish them as part of the docs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-site-plugin/examples/creating-content.html"},"Free content")," - A free structure of documentation content, which supports different template languages (apt, fml, markdown, xdoc and xhtml)")),(0,r.kt)("p",null,"The FINOS Parent POM provides a configuration that allows to publish such content under the ",(0,r.kt)("a",{parentName:"p",href:"https://landscape.finos.org"},"FINOS Project Landscape"),"; to enable it, the build must be invoked using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-Ppublish-site")," Maven profile.  For more info, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/finos/finos-parent-pom#github-plugins-configuration"},"related Pom documentation")," and check configuration on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/symphonyoss/symphony-java-sample-bots"},"symphony-java-sample-bots project"),"."))}d.isMDXComponent=!0}}]);