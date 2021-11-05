import React from "react";
import Avatar from "../Avatar/Avatar";
import { getGender } from "../../Utils/getGender";
import { parseDate } from "../../Utils/parseDate";
import styles from "./UserCard.module.css";

const UserCard = ({ img, name, gender, dob, location, email, phone }) => {
	return (
		<div className={styles.card}>
			
				
				<h3 className={styles.headTitle}>
					{name.title} {name.first} {name.last}
				</h3>
			
			
					<p className={styles.text}>Пол: {getGender[gender]}</p>
			
					<p className={styles.text}>
						Адрес: {location.country} {location.state} {location.city}{" "}
						{location.street.name}, <span>{location.street.number}</span>
					</p>
				
					<p className={styles.text}>Email: {email}</p>
				
					<p className={styles.text}>Дата рождения: {parseDate(dob.date)}</p>
				
					<p className={styles.text}>Возраст: {dob.age} лет</p>
				
				
					<p className={styles.text}>Телефон: {phone}</p>
					<Avatar image={img} />
				
			</div>
		
	);
};

export default UserCard;
