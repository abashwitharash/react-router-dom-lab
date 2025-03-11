import { useParams } from "react-router";

const MailboxDetails = (props) => {
   
    const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find((mailbox) => (
   mailbox._id === Number(mailboxId)
));

return (
    <>
      <h1>Box Details📦</h1>
      <dl className="boxlife">
        <dt>Boxholder:</dt>
        <dd>{ selectedBox.boxOwner }</dd>
        <dt>Boxsize:</dt>
        <dd>{ selectedBox.boxSize }</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;