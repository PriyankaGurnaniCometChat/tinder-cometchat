import { FirestoreCollection } from "@react-firebase/firestore";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import SideFilter from "../components/SideFilter";
import { withLayout } from "../wrappers/layout";

const DiscoverPage = () => {
  const { name } = useParams();
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { likes, dislikes, favorites, id } = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .where("id", "not-in", [id, ...likes, ...dislikes, ...favorites])
      .get()
      .then((querySnapshot) => {
        const persons = [];
        querySnapshot.forEach((person) => persons.push(person.data()));
        setPersons(persons);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-9 py-4">
      <div className="hidden md:block col-span-1">
        <SideFilter />
      </div>
      <div className="flex-grow w-full ml-4 col-span-2 md:col-span-8">
        <div className="text-black border-b border-gray-300 pb-2">
          <h1 className="capitalize font-bold">{name}</h1>
          <h3 className="capitalize text-base">Shop {name}</h3>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
          {loading && <h3>Loading</h3>}
          {!loading &&
            React.Children.toArray(
              persons.map((person, index) => (
                <div className="border-b">
                  <p>{person.name}</p>
                </div>
              ))
            )}
        </section>
      </div>
    </div>
  );
};

export default withLayout(DiscoverPage);
