import {randomNumber} from "../../../Utils";
import {v4 as uuid} from 'uuid';

const template = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum expedita impedit ipsam minima nemo nesciunt odit provident repellendus soluta? Adipisci eum facere facilis nostrum repellendus. Adipisci, alias aspernatur assumenda at deleniti deserunt dicta distinctio dolor doloremque doloribus eius eligendi eveniet expedita ipsam minima nemo neque nesciunt nostrum numquam obcaecati odio optio perferendis quae quaerat quis quisquam reiciendis rem reprehenderit rerum saepe sapiente similique suscipit ullam velit vitae voluptatibus voluptatum. Dolor magnam natus nesciunt quaerat veritatis! Accusamus, architecto at atque blanditiis cupiditate deserunt eaque eius illum ipsa ipsam itaque modi mollitia non perferendis quasi qui quo rerum suscipit velit vero? Ab aliquid dolorum iusto quae temporibus! Assumenda minus nulla tempora voluptatibus. Amet distinctio dolorem ipsam laborum officia qui quia quisquam? Aliquam expedita hic maiores provident quisquam repellendus suscipit. Aliquid amet beatae dolore eaque eius enim id impedit ipsa laudantium magni, maiores quidem quos repudiandae suscipit totam vitae voluptatum. Adipisci, animi beatae blanditiis ducimus error molestiae molestias officia officiis omnis quasi? Animi architecto aspernatur blanditiis sapiente sint. A cum dignissimos dolore illum quam. Consequatur ducimus mollitia nobis quod repudiandae vel velit veniam voluptatum? Animi at atque blanditiis deserunt doloribus eius enim est explicabo facere facilis fuga incidunt iste iure minus modi necessitatibus numquam odio officia perferendis possimus praesentium quam quibusdam, quidem ratione rem repellendus sint suscipit tempore totam, velit voluptas voluptate voluptatem voluptates! Alias aperiam dicta eaque eveniet laboriosam libero nam nisi quia. Aliquam assumenda aut autem culpa cupiditate dolorum eaque enim error eum eveniet excepturi fugit laboriosam laudantium, minima nam nesciunt, nostrum porro quaerat qui, quis quod ratione saepe tempore unde vero. Aliquid atque, beatae, commodi deleniti doloribus eius error eveniet fuga iure mollitia quibusdam rem repudiandae sapiente totam ullam unde voluptatem! Error ex hic labore magni maxime modi possimus provident quasi sunt velit. Alias delectus dolorum minima sit sunt?`
const words = template.split(' ');

export const getRandomList = (count) => {
    let list = []

    for (let i = 0; i < count; i++) {
        let res = ''
        let randomLength = randomNumber(20, 50)

        for (let j = 0; j < randomLength; j++) {
            res += ` ${words[randomNumber(0, words.length - 1)]}`
        }

        list.push({
            text: res,
            id: uuid()
        })
    }

    return list;
}


