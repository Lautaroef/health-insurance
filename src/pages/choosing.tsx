import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import InsuranceDataForm from "components/choosing/InsuranceDataForm";

import { MagnifyingGlass } from "react-loader-spinner";

import urlLogo from "images/logo.png";
import urlFamily from "images/family.svg";
import urlBaseHero from "images/base-hero.png";
import { Person } from "classes/Person";
import { getPerson } from "services/getPerson";
import Image from "next/image";

declare global {
  type TRouter = ReturnType<typeof useRouter> & {
    query: {
      person: Person;
    };
  };
}

function Choosing() {
  const [person, setPerson] = useState<Person>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { query: queryRouter } = router as TRouter;

  const formatDashDate = (date: string) => {
    if (date) {
      const [day, month, year] = date.split("-"); // comes like yyyy-mm-dd
      return `${year}-${month}-${day}`;
    }
    return date;
  };

  // useLayoutEffect(() => {
  //   // check if the state is empty, if it is, redirect to the home page
  //   if (queryRouter.person === undefined) {
  //     router.push("/");
  //   }
  // }, [queryRouter.person]);

  useEffect(() => {
    const getInitialPersonData = async () => {
      const newPerson = new Person();
      const params = queryRouter.person || newPerson;
      const data: Person = await getPerson();

      if (params.id === data.id && params.dob === formatDashDate(data.dob)) {
        newPerson.id = data.id;
        newPerson.name = data.name;
        newPerson.idType = data.idType;
        newPerson.dob = formatDashDate(data.dob);
        newPerson.fatherLastName = data.fatherLastName;
        newPerson.motherLastName = data.motherLastName;
        newPerson.gender = data.gender;
      } else {
        newPerson.id = params.id;
        newPerson.idType = "2";
        newPerson.dob = params.dob;
      }
      newPerson.insured = "";
      newPerson.plan = "basic";
      newPerson.agreeWithDataPolicy = params.agreeWithDataPolicy;
      newPerson.agreeWithCommunicationPolicy = params.agreeWithCommunicationPolicy;
      setPerson(newPerson);
    };
    getInitialPersonData();
  }, []);

  useEffect(() => {
    if (person) {
      setIsLoading(false);
    }
  }, [person]);

  return (
    <>
      {isLoading ? (
        <div className="w-100vh w-100vh flex align-center justify-center">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <main className="main-choosing">
          <header className="header-mobile">
            <Image
              src={urlLogo}
              alt="Wayfair"
              className="logo-image"
              width={120}
              height={36}
            />
          </header>
          <section className="separator-choosing-section">
            <Image
              src={urlFamily}
              height={"90vh"}
              objectFit="scale-down"
              layout="fill"
              style={{ zIndex: 2 }}
            />
            <Image src={urlBaseHero} height={"90vh"} objectFit="cover" layout="fill" />
            <div className="mt-20 ml-30-percent">
              <Image
                src={urlLogo}
                alt="Wayfair"
                className="logo-image"
                width={120}
                height={36}
              />
            </div>
          </section>
          <section className="form-choosing-section">
            <InsuranceDataForm person={person || new Person()} />
          </section>
        </main>
      )}
    </>
  );
}

export default Choosing;
