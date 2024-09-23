import { ArtsIndex } from "./ArtsIndex"

export function ArtsPage() {

  const arts = [
    {id: 1, name: "David Alabo", url: "https://hopperprize.org/wp-content/uploads/david-alabo-birth-01.jpg", width: 300, height: 300},
    {id: 2, name: "David Alabo", url: "https://static1.squarespace.com/static/5f537823abe403086f15b01e/t/5f6b28305143276f76161dc3/1600221460521/APATHTOSELFREFLECTION2.jpg?format=1500w", width: 300, height: 300},
  ];
  

  return (
    <main>
      <h1>Surrealist Digital Art</h1>
      <ArtsIndex  arts={arts}/>
    </main>
  )
}