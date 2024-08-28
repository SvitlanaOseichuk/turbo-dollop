import ProjectCart from '../../components/projectCart/ProjectCart'
import css from "./Projects.module.css"

const projectData = [
    {
        id: "1_p",
        name: "Phonebook",    
    description: "Making an app for keeping contacts with login, focusing on using React for quicker development and adding main features.",
    role: "Lead Developer",
    technology: "HTML, CSS, JavaScript, React",
    assigned: null,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAErCAMAAAB9xjhEAAAA0lBMVEX76ZX////76JH76Zb76pP76ZD+/v/8///76JP97Zf9/vr66ZX+//3/0cv76Jf++eb66Ir7+uv+8sD+/PL97af77q349+D+9NL68sf766L77Jv77qH5+M/79Nf6+939+/f67bX75oL87K7888b7++f+9OL37/HN0c/lyrT03ZD72MHwxsHXwb3Z2dmytbb27ej/6OXOmmzNo3fs0ors7+7mzMj96+rkw4H82bb918/On3j+2dTVqHr93rP846natI/y5tzNl2Dr1sbeup/fuYDXtIV+lY+GAAADnklEQVR4nO3Za3PaRhiGYXa1K4mVEAgBQhwiCiSx2zo4uLUbTOvUcf//X6pMXBtSXEM71qFzX/7kGRieeff0rlSrAQAAAAAAAAAAAAAAAAAAAAAAAACA1+C6yis6wyFkt6cCq+gUL5NxGEV9WXSMl7mdaB6qolMcQkc9U4GRzyRBpxpBtarEyANVNiholQ2O+nTgdUyS5B/VkkMzGB7xBXdkQifWuW+xOjZNMz7iTFe1N3Pzenme5/XC9Kh2Ts9HUfJaaZ5n6XBkOkdNOcst5mi1pFvI7/4LqhrNRyXpCrT0tftVMmnJKkSVbbvZ76paoPLfz4+iIkeI8Lt4qPqJLO9V2ZITWwjhN+2uNGb2OAVk2Rp9r9X0xUY0FsKOW5uaqsF4qoOazKZDaWqcPOTcMHZfZ6VUrbFtklY3TKOZdstRWzkRO+x513M7se3bfs/eFLqdBGWIqke7QYVvp+kmsdnk9B1HzMuwecmeeJFzXJP9OtTbd+8f4mR/9p6YfnoSnD4tKWXl1s3s/JD6/ocf35+d2faHxfnC2VvQk4+ny4vHpDqe6VzmrKeniRtsBW00zn86+/Du50ajcbkvp79ar1dX9a9J3UEzjEwuT30GUxH3n35I/dJofMoqefnpuaCL5Wq5uqg/fN6dReE4l8FP/Ddh82kZ3we9zoKeN54Lmi6Xq/XjYKvECZs6j6C66ziTraC/ZkN/X9H7oOmexWQ7Jx+vthZTPZH53J3c6azdfho79dv1pZ0tdzsb+ut9iz69+fz5NJdkf0sqtxsOL/kr0fn1Yu8U/f1ElOK819HD4nacfbuTb24XURlOptog3VfHHbMyXFhlL5ug2w2UyP55mqu+4zthQTf6XTK2xe5iN8Zspe75Ip/d6EX1freWtOO4eZ/Wvv1ys1ytbr7cLoSfzdpxpzVzSvLeKZA60J6WQyFG9eDi6urq7u5uvV7/8bY3G2hl6aAMM3RbZ5J1AJ5X/6rm6pJe97+5LfMWB3glZTicDpG1XMVupwfe0+QkjmfFbatBYCWHneOy64tJYUe+npjwzUFlUkNnHoZeUSW1+mF4WMNhBUnUb6uiZmkSppE58GmN2ymsnpuHi5NDH9RZssD9yaqXoyP+33Nr5exDv5VMO90q9KJ6aqcluST9s6DXm4+qEHQYmzByK7Ad6FY8zeeJ8n9Wund2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1fUn0QMzYKbYp+UAAAAASUVORK5CYII=",
    alt: "cute dog",
    href: "https://goit-react-hw-08-mmtp.vercel.app/",
    github: "https://github.com/SvitlanaOseichuk/goit-react-hw-08"
},
{
    id: "2_p",
    name: "Aqua-track",    
    description: "The AquaTrack REST API provides access to all the main functions of the water tracker via standard HTTP requests. Users can register, authenticate, manage their water consumption and set personal goals using this API",
    role: "Developer",
    technology: "HTML, CSS (including responsive design), JavaScript, React, Node.js",
    assigned: "Backend, adding water",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAErCAMAAAB9xjhEAAAA0lBMVEX76ZX////76JH76Zb76pP76ZD+/v/8///76JP97Zf9/vr66ZX+//3/0cv76Jf++eb66Ir7+uv+8sD+/PL97af77q349+D+9NL68sf766L77Jv77qH5+M/79Nf6+939+/f67bX75oL87K7888b7++f+9OL37/HN0c/lyrT03ZD72MHwxsHXwb3Z2dmytbb27ej/6OXOmmzNo3fs0ors7+7mzMj96+rkw4H82bb918/On3j+2dTVqHr93rP846natI/y5tzNl2Dr1sbeup/fuYDXtIV+lY+GAAADnklEQVR4nO3Za3PaRhiGYXa1K4mVEAgBQhwiCiSx2zo4uLUbTOvUcf//X6pMXBtSXEM71qFzX/7kGRieeff0rlSrAQAAAAAAAAAAAAAAAAAAAAAAAACA1+C6yis6wyFkt6cCq+gUL5NxGEV9WXSMl7mdaB6qolMcQkc9U4GRzyRBpxpBtarEyANVNiholQ2O+nTgdUyS5B/VkkMzGB7xBXdkQifWuW+xOjZNMz7iTFe1N3Pzenme5/XC9Kh2Ts9HUfJaaZ5n6XBkOkdNOcst5mi1pFvI7/4LqhrNRyXpCrT0tftVMmnJKkSVbbvZ76paoPLfz4+iIkeI8Lt4qPqJLO9V2ZITWwjhN+2uNGb2OAVk2Rp9r9X0xUY0FsKOW5uaqsF4qoOazKZDaWqcPOTcMHZfZ6VUrbFtklY3TKOZdstRWzkRO+x513M7se3bfs/eFLqdBGWIqke7QYVvp+kmsdnk9B1HzMuwecmeeJFzXJP9OtTbd+8f4mR/9p6YfnoSnD4tKWXl1s3s/JD6/ocf35+d2faHxfnC2VvQk4+ny4vHpDqe6VzmrKeniRtsBW00zn86+/Du50ajcbkvp79ar1dX9a9J3UEzjEwuT30GUxH3n35I/dJofMoqefnpuaCL5Wq5uqg/fN6dReE4l8FP/Ddh82kZ3we9zoKeN54Lmi6Xq/XjYKvECZs6j6C66ziTraC/ZkN/X9H7oOmexWQ7Jx+vthZTPZH53J3c6azdfho79dv1pZ0tdzsb+ut9iz69+fz5NJdkf0sqtxsOL/kr0fn1Yu8U/f1ElOK819HD4nacfbuTb24XURlOptog3VfHHbMyXFhlL5ug2w2UyP55mqu+4zthQTf6XTK2xe5iN8Zspe75Ip/d6EX1freWtOO4eZ/Wvv1ys1ytbr7cLoSfzdpxpzVzSvLeKZA60J6WQyFG9eDi6urq7u5uvV7/8bY3G2hl6aAMM3RbZ5J1AJ5X/6rm6pJe97+5LfMWB3glZTicDpG1XMVupwfe0+QkjmfFbatBYCWHneOy64tJYUe+npjwzUFlUkNnHoZeUSW1+mF4WMNhBUnUb6uiZmkSppE58GmN2ymsnpuHi5NDH9RZssD9yaqXoyP+33Nr5exDv5VMO90q9KJ6aqcluST9s6DXm4+qEHQYmzByK7Ad6FY8zeeJ8n9Wund2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1fUn0QMzYKbYp+UAAAAASUVORK5CYII=",
    alt: "cute dog",
    href: "https://project-aqua-track.vercel.app/",
    github: "https://github.com/KristinaHranovska/node-rest-api"
}

]

const Projects = () => {
  return (
    <div className={css.card}>
        <h2 className={css.sectionTitle}>Projects</h2>
        <button>L</button>

        {projectData.map(item => {
            return <ProjectCart
                key={item.id}
                name={item.name}
                description={item.description} 
                role={item.role} 
                assigned={item.assigned} 
                technology={item.technology} 
                img={item.img}
                alt={item.alt}
                href={item.href}
                github={item.github} />
        })}
        
        <button>R</button>
    </div>
  )
}

export default Projects