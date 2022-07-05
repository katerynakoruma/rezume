import styles from '../Contacts.module.scss';

function WhatsappIcon(){
    
    return(
        <div>
            <svg display="none">
                <symbol viewBox="0 0 64 64" id="whatsapp">
                <g fill-rule="evenodd"><path d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16" fill="#00d264"/><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#00eb78"/><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#00b950"/><g fill="#fff"><path d="m21.673 47.093a2.0027 2.0027 0 0 1 1.593.218 18.981 18.981 0 1 0 -6.581-6.574 1.9938 1.9938 0 0 1 .216 1.588c-.557 1.971-1.901 6.675-1.901 6.675s4.704-1.344 6.673-1.907zm-8.454-4.359a23.0015 23.0015 0 1 1 8.047 8.047s-6.377 1.822-9.535 2.725a1.0012 1.0012 0 0 1 -1.237-1.237c.903-3.158 2.725-9.535 2.725-9.535z"/><path d="m21.981 24.786a18.7035 18.7035 0 0 0 17.224 17.352h.002a4.964 4.964 0 0 0 3.894-1.44l.698-.698a1.76 1.76 0 0 0 .515-1.243v-1.482a1.0011 1.0011 0 0 0 -.553-.895c-1.053-.526-3.339-1.669-4.459-2.229a1.0009 1.0009 0 0 0 -1.155.187c-.558.558-1.44 1.441-1.94 1.94a1.001 1.001 0 0 1 -.903.274l-.009-.002a10.0005 10.0005 0 0 1 -7.845-7.845l-.002-.009a1.001 1.001 0 0 1 .274-.903c.499-.5 1.382-1.382 1.94-1.94a1.0009 1.0009 0 0 0 .187-1.155c-.56-1.12-1.703-3.406-2.229-4.459a1.0011 1.0011 0 0 0 -.895-.553h-1.26a2.1382 2.1382 0 0 0 -1.587.706c-.201.224-.432.48-.664.738a4.86 4.86 0 0 0 -1.238 3.589c.002.022.003.044.005.067z"/></g></g>

                </symbol>
            </svg>
            <svg className={styles.messenger_icon}>
                <use href="#whatsapp"></use>
            </svg>
        </div>
    )
}
export default WhatsappIcon;